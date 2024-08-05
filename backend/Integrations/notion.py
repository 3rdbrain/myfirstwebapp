from typing import List, Dict
import httpx
from ..models.notiondatabase import NotionDatabaseEntry

NOTION_VERSION = "2022-06-28"

async def query_database(api_token: str, database_id: str) -> List[NotionDatabaseEntry]:
    url = f"https://api.notion.com/v1/databases/{database_id}/query"
    headers = {
        "Authorization": f"Bearer {api_token}",
        "Content-Type": "application/json",
        "Notion-Version": NOTION_VERSION
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses
        data = response.json()

    entries = [
        NotionDatabaseEntry(id=entry["id"], properties=entry["properties"])
        for entry in data.get("results", [])
    ]
    return entries
