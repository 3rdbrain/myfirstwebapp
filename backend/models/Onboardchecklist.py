from pydantic import BaseModel
from typing import Optional

class Onboardchecklist(BaseModel):
    name: Optional[str] = None
    when: Optional[str] = None
    complete: Optional[str] = None
    notes: Optional[str] = None
    relevantresources: Optional[str] = None
    pointofcontact: Optional[str] = None
    email:Optional[str] = None

