import psycopg2

# ข้อมูลสำหรับเชื่อมต่อ
HOST = "localhost"
PORT = 5432
DATABASE = "your_database_name"
USER = "your_username"
PASSWORD = "your_password"

# สร้างการเชื่อมต่อ
conn = psycopg2.connect(
    host=HOST,
    port=PORT,
    database=DATABASE,
    user=USER,
    password=PASSWORD
)

# สร้าง cursor
cursor = conn.cursor()

# สร้างตาราง
cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255)
    );
""")

# ปิดการเชื่อมต่อ
conn.commit()
cursor.close()
conn.close()