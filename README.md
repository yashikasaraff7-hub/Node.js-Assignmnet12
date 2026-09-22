# Node.js Assignment 12 - JWT Authentication

A Node.js & Express application implementing JSON Web Token (JWT) Authentication.

## Project Structure

```text
Assignment 12/
└── JWT Authetication/
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   └── user.js
    ├── .env.example
    ├── package.json
    └── server.js
```

## Setup Instructions

1. Navigate to the project directory:
   ```bash
   cd "JWT Authetication"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   # or for development:
   npm run dev
   ```

## API Endpoints

- `GET /` - Public health check endpoint
- `POST /login` - User login endpoint (generates JWT token)
- `GET /profile` - Protected route (requires `Authorization: Bearer <token>` header)

