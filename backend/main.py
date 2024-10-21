from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from .models.cta import CustomerDetails
from .models.pets import PetCreate, PetResponse, NearbyPetResponse
from .Integrations.gmaps import async_geocode_address
from .config.mongodb import collection, petsdb
from .schema.schemas import list_cta_serial
from geopy.distance import geodesic
from bson import ObjectId
from typing import List
from .models.login import UserCreate, UserResponse, Token
from .config.utils import verify_password, get_password_hash, create_access_token, decode_access_token
from .config.mongodb import users_collection, pets_collection

app = FastAPI()
router = APIRouter()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def authenticate_user(username: str, password: str):
    user = await users_collection.find_one({"username": username})
    if not user or "hashed_password" not in user:
        return False
    if not verify_password(password, user["hashed_password"]):
        return False
    return user

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/users/", response_model=UserResponse)
async def create_user(user: UserCreate):
    existing_user = await users_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered",
        )
    hashed_password = get_password_hash(user.password)
    user_data = user.dict()
    user_data["hashed_password"] = hashed_password
    del user_data["password"]
    result = await users_collection.insert_one(user_data)
    created_user = await users_collection.find_one({"_id": result.inserted_id})
    return UserResponse(id=str(created_user["_id"]), username=created_user["username"], email=created_user["email"])

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token_data = decode_access_token(token)
    user = await users_collection.find_one({"username": token_data.username})
    if user is None:
        raise credentials_exception
    return user

@router.get("/users/me/", response_model=UserResponse)
async def read_users_me(current_user: UserResponse = Depends(get_current_user)):
    return current_user

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
