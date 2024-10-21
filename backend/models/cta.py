from pydantic import BaseModel, EmailStr
from datetime import datetime

class CustomerDetails(BaseModel):
    name: str
    email: EmailStr
    action_time: int = int(datetime.timestamp(datetime.now()))
