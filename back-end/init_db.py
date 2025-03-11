import sqlite3

# เชื่อมต่อฐานข้อมูล (ถ้ายังไม่มีไฟล์ db.sqlite3 จะถูกสร้างขึ้น)
conn = sqlite3.connect("db.sqlite3")
cursor = conn.cursor()

# สร้างตาราง users
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
""")

# สร้างตารางอื่น ๆ (เพิ่มตามต้องการ)
cursor.execute("""
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    amount REAL NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
""")

# บันทึกการเปลี่ยนแปลง
conn.commit()
conn.close()

print("✅ Database and tables created successfully!")
