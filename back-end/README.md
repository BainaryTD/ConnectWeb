# FastAPI Project

## Overview

This is a FastAPI-based project that provides a RESTful API with authentication and database support. The project leverages the following technologies:

- FastAPI: A modern, high-performance web framework for building APIs with Python.

- Uvicorn: An ASGI server for running FastAPI applications.

- SQLAlchemy: An SQL toolkit and Object Relational Mapper (ORM).

- Databases: Async database support for SQLAlchemy.

- Python-dotenv: For managing environment variables.

- Passlib: A password hashing library.

- PyJWT: JSON Web Token (JWT) implementation in Python.

- Email-validator: To validate email addresses.

- Alembic: A lightweight database migration tool for SQLAlchemy.

- bcrypt: A library for hashing passwords securely.

## Installation

### Prerequisites

Ensure you have Python 3.8+ installed.

### Setup

- Create a virtual environment and activate it:

```
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
```

- Install dependencies:

```
    pip install -r requirements.txt
```

- Create a .env file in the project root and configure environment variables:

```
    DATABASE_URL=sqlite:///./test.db  # Change for production
    SECRET_KEY=your_secret_key_here
    ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Database Setup & Migrations

- Creating the Database (Development)

```
    python -c "from app.database import Base, engine; Base.metadata.create_all(bind=engine)"
```

- Initialize Alembic and Set the Current State

```
    alembic stamp head
```

- Creating a New Migration Revision

```
    alembic revision --autogenerate -m "Fix migrations"
```

- Adding a New Column to Users Table

```
    alembic revision --autogenerate -m "Add role column to users"
```

- Running Migrations

```
    alembic upgrade head
```

## Running the Application

- Development Mode

```
    uvicorn app.main:app --reload
```

- Production Mode
  - For production, use Gunicorn with Uvicorn workers:

```
    gunicorn -k uvicorn.workers.UvicornWorker -w 4 -b 0.0.0.0:8000 app.main:app
```

Or use Docker:
```
    docker build -t fastapi-app .
    docker run -d -p 8000:8000 fastapi-app
```

## Authentication

This project uses JWT for authentication.

- Register: POST /register

- Login: POST /login

- Protected Route (requires authentication): GET /users

## API Endpoints

| Method | Endpoint | Description |
|----------|----------|----------|
|   POST   | /auth/register   | Register a user   |
| POST   | /auth/login   | Authenticate user   |
| GET   | /users   | Get current user   |

## Project Structure
    BACK-END/
    ├── app/
    │   ├── __pycache__/
    │   ├── routes/
    │   │   ├── __pycache__/
    │   │   ├── auth.py
    │   │   ├── users.py
    │   ├── auth.py
    │   ├── database.py
    │   ├── main.py
    │   ├── models.py
    │   ├── schemas.py
    │   ├── utils.py
    ├── migrations/
    │   ├── __pycache__/
    │   ├── versions/
    │   ├── env.py
    │   ├── README
    │   ├── script.py.mako
    ├── venv/
    ├── .env
    ├── app.db
    ├── create_db.txt
    ├── create_files.bat
    ├── init_db.py
    ├── README.md
    ├── requirements.txt


## Contact

For any inquiries, feel free to contact Bainary at [tpk.devx@gmail.com].

