from pydantic import BaseModel
from typing import Dict, Any, List

class NotionDatabaseProperty(BaseModel):
    id: str
    type: str
    name: str

class NotionDatabaseEntry(BaseModel):
    id: str
    properties: Dict[str, Any]

class NotionDatabase(BaseModel):
    properties: Dict[str, NotionDatabaseProperty]
    entries: List[NotionDatabaseEntry]
