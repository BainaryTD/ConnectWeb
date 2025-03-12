from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.schemas import UserCreate, UserResponse
from app.utils import hash_password
from app.routes.auth import get_current_user

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/user")
async def get_user(user: UserResponse = Depends(get_current_user)):
    return {"user": user}

# TODO: สำหรับทำหน้า admin
@router.get("/user/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    user = db.query(User).filter(User.id == user_id).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if current_user.role == "admin":
        return user

    if current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Permission denied")
    
    return user

