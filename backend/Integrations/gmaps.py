import os
import httpx
from fastapi import HTTPException

async def geocode_address(address: str):
    api_key = os.getenv('YOUR_GOOGLE_MAPS_API_KEY')
    if not api_key:
        raise HTTPException(status_code=500, detail="Google Maps API key not found")

    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={api_key}"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            data = response.json()

            if data["status"] != "OK":
                raise HTTPException(status_code=400, detail=f"Geocoding failed: {data.get('error_message', 'Unknown error')}")

            location = data["results"][0]["geometry"]["location"]
            return location["lat"], location["lng"]
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while requesting: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")
    
async def async_geocode_address(address: str):
    api_key = os.getenv('YOUR_GOOGLE_MAPS_API_KEY')
    if not api_key:
        raise HTTPException(status_code=500, detail="Google Maps API key not found")

    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={api_key}"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            data = response.json()

            if data["status"] != "OK":
                raise HTTPException(status_code=400, detail=f"Geocoding failed: {data.get('error_message', 'Unknown error')}")

            location = data["results"][0]["geometry"]["location"]
            return location["lat"], location["lng"]
    except httpx.RequestError as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while requesting: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")

# Helper function for reverse geocoding (optional)
async def reverse_geocode(lat: float, lng: float):
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{lng}&key={os.getenv('YOUR_GOOGLE_MAPS_API_KEY')}"