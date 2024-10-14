import requests
from geopy.distance import geodesic
import os
import httpx
from fastapi import HTTPException

async def geocode_address(address: str):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={os.getenv('GOOGLE_MAPS_API_KEY')}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        data = response.json()

        if data["status"] != "OK":
            raise HTTPException(status_code=400, detail="Geocoding failed")

        location = data["results"][0]["geometry"]["location"]
        return location["lat"], location["lng"]

# Helper function for reverse geocoding (optional)
async def reverse_geocode(lat: float, lng: float):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&key={os.getenv('GOOGLE_MAPS_API_KEY')}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        data = response.json()

        if data["status"] != "OK":
            raise HTTPException(status_code=400, detail="Reverse geocoding failed")

        return data["results"][0]["formatted_address"]