# Pydantic model for User
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List


class UserCreate(BaseModel):
    username: str = Field(..., example="dog_lover123")
    email: str = Field(..., example="doglover@example.com")
    password: str = Field(..., example="password123")

class UserResponse(BaseModel):
    id: str
    username: str
    email: str

    class Config:
        orm_mode = True  # Needed to serialize SQLAlchemy models to Pydantic

# Pydantic model for Pet
class PetBase(BaseModel):
    name: str
    species: str
    age: Optional[int] = None
    owner_email: EmailStr
    address: str  # Ensure address is included

class PetCreate(PetBase):
    pass


class PetResponse(PetBase):
    id: str
    lat: float
    lng: float

# For pet matching responses
class NearbyPetResponse(PetBase):
    name: str
    species: str
    age: Optional[int]
    lat: float
    lng: float
    distance_km: float  # Added in response to show proximity
    owner_email: EmailStr
    address: str