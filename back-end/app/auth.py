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

ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.datetime.utcnow() + datetime.timedelta(days=1)
    to_encode.update({"exp": expire})

    sub_value = to_encode.get("sub")
    print(f"🔍 Debug: sub before encoding: {sub_value}, type: {type(sub_value)}")  # ✅ Debug

    if sub_value is not None and not isinstance(sub_value, str):
        to_encode["sub"] = str(sub_value)  # ✅ บังคับให้เป็น `str`

    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    print(f"✅ Created Token: {token}")
    return token

def verify_token(token: str = Depends(oauth2_scheme)):
    print(f"🔍 Debug: Received Token: {token}")

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print(f"🔍 Debug: Decoded Payload: {payload}")

        exp_timestamp = payload.get("exp")
        exp_datetime = datetime.datetime.utcfromtimestamp(exp_timestamp)
        print(f"⏳ Token expires at: {exp_datetime} UTC")  # ✅ ดูว่า Token หมดอายุเมื่อไหร่

        if "sub" not in payload:
            raise ValueError("Missing sub in token")

        return payload

    except jwt.ExpiredSignatureError:
        print("❌ Token expired")
        raise HTTPException(status_code=401, detail="Token expired")

    except jwt.InvalidTokenError as e:
        print(f"❌ Invalid Token: {e}")
        raise HTTPException(status_code=401, detail="Invalid token")
    
 
