from fastapi import FastAPI, HTTPException, Depends
from .Integrations.airtable import fetch_employees
from .models.Onboardchecklist import Onboardchecklist
from .models.notiondatabase import NotionDatabaseEntry
from typing import List, Dict
from .Integrations.notion import query_database
import httpx
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import os
from dotenv import load_dotenv
from .routes.route import router

load_dotenv()

app = FastAPI()
#security = HTTPBearer()

@app.get("/employees", response_model=List[Onboardchecklist])
async def get_employees():
    try:
        employees = fetch_employees()
        return employees
    except Exception as e:
        return {"error": str(e)}   
        
api_token = os.getenv("NOTION_API_TOKEN")    
@app.get("/database/{database_id}/entries", response_model=List[NotionDatabaseEntry])
async def get_database_entries(database_id: str):
    try:
        entries = await query_database(api_token, database_id)
    except httpx.HTTPStatusError as exc:
        raise HTTPException(status_code=exc.response.status_code, detail=exc.response.text)
    
    return entries

app.include_router(router)



