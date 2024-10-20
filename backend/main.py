from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from .models.cta import CustomerDetails
from .models.pets import UserCreate, UserResponse,PetCreate, PetResponse, NearbyPetResponse
import os
from dotenv import load_dotenv
from geopy.distance import geodesic
from .config.mongodb import collection, petsdb
from .schema.schemas import list_cta_serial
from .Integrations.gmaps import async_geocode_address
from bson import ObjectId
#from config.mongodb import pets_collection


load_dotenv()
app = FastAPI()
router = APIRouter()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/allcustomers")
async def get_all_customers():
    try:
        customers = collection.find()
        return list_cta_serial(customers)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.post("/newcustomers")
async def create_customer(details: CustomerDetails):
    try:
        result = collection.insert_one(details.model_dump())
        return {"status_code": 200, "message": "Customer created successfully"}
    
    except Exception as e:
        return HTTPException(status_code=500, detail=f"An error occurred: {e}")

# Create a User
@app.post("/users/", response_model=UserResponse)
async def create_user(user: UserCreate):
    try:
        # Insert the new user into MongoDB
        result = petsdb["users"].insert_one(user.model_dump())
        created_user = petsdb["users"].find_one({"_id": result.inserted_id})
        
        return {"id": str(created_user["_id"]), "username": created_user["username"], "email": created_user["email"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

# Create a Pet with Geocoding
@app.post("/pets/", response_model=PetResponse)
async def create_pet(pet: PetCreate, user_id: str):
    try:
        # Validate user exists
        user = await petsdb["users"].find_one({"_id": ObjectId(user_id)})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Geocode the pet's address to get lat/lng
        lat, lng = await async_geocode_address(pet.address)
        
        # Insert the new pet into MongoDB
        pet_data = pet.model_dump()
        pet_data.update({"lat": lat, "lng": lng, "owner_id": user_id})
        result = await petsdb["pets"].insert_one(pet_data)
        
        # Retrieve the inserted pet
        created_pet = await petsdb["pets"].find_one({"_id": result.inserted_id})
        
        return {
            "id": str(created_pet["_id"]),
            "name": created_pet["name"],
            "species": created_pet["species"],
            "age": created_pet["age"],
            "address": pet.address,
            "lat": lat,
            "lng": lng,
            "owner_email": user["email"]
        }
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
from typing import List

@app.get("/nearby-pets/", response_model=List[NearbyPetResponse])
async def get_nearby_pets(address: str, radius_km: float):
    try:
        # Geocode the provided address to get lat/lng
        lat, lng = await async_geocode_address(address)
        user_location = (lat, lng)
        nearby_pets = []

        # Fetch all pets from the database
        pets = await petsdb["pets"].find().to_list(100)  # Adjust the list size as needed

        for pet in pets:
            pet_location = (pet["lat"], pet["lng"])
            distance = geodesic(user_location, pet_location).km
            if distance <= radius_km:
                nearby_pets.append(NearbyPetResponse(
                    name=pet["name"],
                    species=pet["species"],
                    age=pet["age"],
                    lat=pet["lat"],
                    lng=pet["lng"],
                    distance_km=distance,
                    owner_email=pet["owner_email"],
                    address=pet["address"]
                ))

        if not nearby_pets:
            raise HTTPException(status_code=404, detail="No pets found nearby")

        return nearby_pets
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


app.include_router(router)
