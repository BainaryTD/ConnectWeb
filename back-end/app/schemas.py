from pydantic import BaseModel, EmailStr
from datetime import datetime

from app.models import RoleEnum

class UserCreate(BaseModel):
    fullname: str
    username: str
    email: EmailStr
    password: str
    role: RoleEnum = RoleEnum.user
    
class UserLogin(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: int
    fullname: str
    username: str
    email: str
    created_at: datetime

    class Config:
        orm_mode = True  # รองรับ SQLAlchemy ORM

