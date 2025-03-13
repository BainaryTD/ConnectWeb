# Project Name

### Overview

This project consists of a Backend using FastAPI and a Frontend built with Vite. Below are the installation and setup instructions for both parts.

## Backend

### Technology Used

- FastAPI

- Uvicorn (for running the server)

#### Installation

- Make sure you have Python installed.

- Install dependencies by running:
```
    pip install -r requirements.txt
```

#### Running the Server

To start the FastAPI server, use the following command:
```
    uvicorn app.main:app --reload
```

The server will run on http://127.0.0.1:8000/ by default.


## Frontend

### Technology Used

- Vite (for fast frontend development)

- Node.js & npm (for package management)

#### Installation

- Make sure you have Node.js installed.

- Install dependencies by running:
```
    npm install
```

#### Running the Development Server

To start the Vite development server, run:
```
npm run dev
```

By default, the frontend will be available at http://localhost:5173/.

## Additional Notes

- Ensure that both frontend and backend are running simultaneously for full functionality.

- Modify configurations in the .env file if needed.

- Refer to the official documentation of FastAPI and Vite for further customization.
