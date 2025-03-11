import jwt
import datetime
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException
from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY", "defaultsecret")  # ใช้ค่าเริ่มต้นหากไม่มีค่า
DATABASE_URL = os.getenv("DATABASE_URL")
DEBUG = os.getenv("DEBUG", "False").lower() == "true"

print("SECRET_KEY:", SECRET_KEY)
print("DATABASE_URL:", DATABASE_URL)
print("DEBUG Mode:", DEBUG)

SECRET_KEY = os.getenv("SECRET_KEY", "mysecretkey")
ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.datetime.utcnow() + datetime.timedelta(days=1)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    
 
