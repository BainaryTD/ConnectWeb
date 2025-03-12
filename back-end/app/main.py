from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routes import auth, users

app = FastAPI()

# ✅ ตั้งค่า Allow Origins (กำหนดโดเมนที่อนุญาต)
origins = ["*"]

# ✅ เพิ่ม CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # อนุญาตทุก Method เช่น GET, POST, PUT, DELETE
    allow_headers=["*"],  # อนุญาตทุก Header
)

Base.metadata.create_all(bind=engine)

app.include_router(users.router, prefix="", tags=["User"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])


# @app.get("/")
# def home():
#     return {"message": "Welcome to FastAPI with JWT"}
