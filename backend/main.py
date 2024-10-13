from fastapi import FastAPI, HTTPException, APIRouter
from .models.cta import CustomerDetails
from typing import List, Dict
import httpx
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import os
from dotenv import load_dotenv
from .config.mongodb import collection
from .schema.schemas import list_cta_serial
from .models.cta import CustomerDetails

load_dotenv()
app = FastAPI()
router = APIRouter()


@app.get("/allcustomers")
async def get_all_customers():
    customers = collection.find()
    return list_cta_serial(customers)

@app.post("/newcustomers")
async def create_customer(details: CustomerDetails):
    try:
        result = collection.insert_one(details.model_dump())
        return {"status_code": 200, "message": "Customer created successfully"}
    
    except Exception as e:
        return HTTPException(status_code=500, detail=f"An error occurred: {e}")

app.include_router(router)
