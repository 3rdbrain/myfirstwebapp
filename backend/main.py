from typing import Union,List, Dict
from fastapi import FastAPI, HTTPException # type: ignore
from pydantic import BaseModel, ValidationError
from producthunt import ProductHunt
from dotenv import load_dotenv
import requests
import os, time , httpx

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

# PH has an sdk so using it directly in the main.py
# check for regular updates or else move to rest..
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

HACKER_NEWS_BASE_URL = "https://hacker-news.firebaseio.com/v0"

async def fetch_stories(story_type: str = 'newstories') -> List[int]:
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{HACKER_NEWS_BASE_URL}/{story_type}.json")
        if response.status_code != 200:
            return []  # Return an empty list if there is an error fetching the story IDs
        return response.json()

# Asynchronous function to fetch story details
async def fetch_story_details(story_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{HACKER_NEWS_BASE_URL}/item/{story_id}.json")
        if response.status_code != 200:
            return None  # Return None if there is an error fetching the story details
        return response.json()

# Helper function to filter stories containing the keyword "SaaS"
def filter_stories_by_keyword(stories: List[dict], keyword: str) -> List[dict]:
    filtered_stories = [story for story in stories if keyword.lower() in (story.get('title', '') + story.get('text', '')).lower()]
    return filtered_stories

# Endpoint to get latest stories filtered by the keyword "SaaS"
@app.get("/saas-stories/")
async def get_saas_stories():
    story_ids = await fetch_stories('newstories')  # Fetch new stories; can change to 'topstories' or 'beststories'
    stories = []
    for story_id in story_ids[:10]:  # Fetch details for the first 10 stories for quick testing
        story = await fetch_story_details(story_id)
        if story:
            stories.append(story)
    saas_stories = filter_stories_by_keyword(stories, 'SaaS')
    return saas_stories
