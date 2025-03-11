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

@router.post("/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # ตรวจสอบ username หรือ email ซ้ำ
    existing_user = db.query(User).filter((User.username == user.username) | (User.email == user.email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already exists")
    
    # Hash Password และบันทึกข้อมูล
    hashed_pw = hash_password(user.password)
    new_user = User(fullname=user.fullname, username=user.username, email=user.email, hashed_password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    user = db.query(User).filter(User.id == user_id).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if current_user.role == "admin":
        return user

    if current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Permission denied")
    
    return user

