@echo off
echo Creating project structure...

:: สร้างโฟลเดอร์หลัก
mkdir app 2>nul
mkdir app\routes 2>nul

:: สร้างไฟล์ในโฟลเดอร์ app
echo. > app\main.py
echo. > app\database.py
echo. > app\models.py
echo. > app\schemas.py
echo. > app\auth.py
echo. > app\utils.py

:: สร้างไฟล์ในโฟลเดอร์ routes
echo. > app\routes\users.py
echo. > app\routes\auth.py

:: สร้างไฟล์โปรเจคหลัก
echo. > .env
echo. > requirements.txt
echo. > README.md

echo Project structure created successfully! ✅

