from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.schemas import UserCreate, UserLogin, UserResponse
from app.utils import hash_password, verify_password
from app.auth import create_access_token, verify_token

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    # ตรวจสอบว่ามี username หรือ email ซ้ำในฐานข้อมูลหรือไม่
    existing_user = db.query(User).filter(
        (User.username == user.username) | (User.email == user.email)
    ).first()
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or Email already exists")

    # แฮชรหัสผ่าน
    hashed_pw = hash_password(user.password)

    # สร้าง User ใหม่
    db_user = User(
        fullname=user.fullname,
        username=user.username,
        email=user.email,
        hashed_password=hashed_pw
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return {"message": "User created successfully"}

@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    print(user)
    db_user = db.query(User).filter(User.username == user.username).first()
    if not db_user or not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": db_user.id})
    return {"access_token": token, "token_type": "bearer"}

# สำหรับตรวจสอบ user ที่เข้ามา
def get_current_user(token: str = Depends(verify_token), db: Session = Depends(get_db)):
    """ ดึงข้อมูล User ปัจจุบันจาก JWT """
    user = db.query(User).filter(User.id == token["sub"]).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user