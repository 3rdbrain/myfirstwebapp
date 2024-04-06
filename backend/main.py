from typing import Union,List, Dict
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ValidationError
from producthunt import ProductHunt
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()
# Retrieve the API key
api_key = os.getenv('PH_KEY')
ph = ProductHunt(api_key)

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None
class Product(BaseModel):
    ID: int
    Name: str
    Tagline: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

@app.get("/dailyproducts", response_model=List[Product])
def get_daily_products():
    daily_products_data = ph.get_daily()
    # Check if the result is None
    if daily_products_data is None:
        raise HTTPException(status_code=404, detail="No daily products found.")
    # Ensure all items are dictionaries
    filtered_products_data = [product for product in daily_products_data if isinstance(product, dict)]
    # Attempt to create Product instances, handling potential ValidationError internally
    try:
        products = [Product(**product) for product in filtered_products_data]
    except ValidationError as e:
        raise HTTPException(status_code=400, detail=f"Validation error: {e.errors()}")

    return products