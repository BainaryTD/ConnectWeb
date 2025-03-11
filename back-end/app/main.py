from fastapi import FastAPI
from app.database import engine, Base
from app.routes import auth

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def home():
    return {"message": "Welcome to FastAPI with JWT"}

