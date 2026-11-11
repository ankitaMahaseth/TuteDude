# 📝 Todo Management App – Backend API

A RESTful Todo Management API developed using **Node.js and Express.js**. This backend provides CRUD operations to manage todo tasks and connects with a database through a dedicated database connection module.

## 🚀 Features

- **Create Todo:** Add new tasks.
- **Get All Todos:** Retrieve all saved tasks.
- **Update Todo:** Modify existing tasks using their ID.
- **Delete Todo:** Remove tasks using their ID.
- **RESTful API:** Structured HTTP endpoints.
- **Database Connection:** Dedicated database configuration.
- **CORS Configuration:** Allow communication with the React frontend.
- **Environment Variables:** Manage application configuration securely.
- **Global Error Handling:** Centralized error management.
- **404 Handling:** Handle undefined API routes.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- MongoDB / Configured Database
- dotenv
- CORS
- REST API

## 📁 Project Structure

```text
backend/
│
├── config/
│   └── databaseConnection.js
│
├── controllers/
        └── todoController.js
│
├── middleware/
│   └── errorHandler.js
│
├── models/
│
├── routes/
│   └── todoRoutes.js
│
├── services/
    └── todoService.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_BACKEND_REPOSITORY_URL
```

### 2. Navigate to the Backend Folder

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend root directory.

```env
PORT=3000
```

Add your database connection variables according to your `databaseConnection.js` configuration.

**Important:** Never upload your `.env` file or database credentials to GitHub.

### 5. Start the Backend Server

For normal execution:

```bash
npm start
```

For development (if Nodemon is installed):

```bash
npm run dev
```

The backend server will run at:

http://localhost:3000

## 🔗 API Endpoints

Base URL:

```text
http://localhost:3000
```

### 1. Welcome API

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/`      | Check API status |

Example response:

```json
{
  "success": true,
  "message": "Welcome to the To Do List API"
}
```

### 2. Todo APIs

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/todos`     | Get all todos           |
| POST   | `/todos`     | Create a new todo       |
| PUT    | `/todos/:id` | Update an existing todo |
| DELETE | `/todos/:id` | Delete a todo           |

### Example API Requests

**Create Todo – POST /todos**

```json
{
  "title": "Learn React",
  "description": "Practice React CRUD operations"
}
```

_Note: The request body fields should match your Todo model and controller validation._

**Update Todo – PUT /todos/:id**

```json
{
  "title": "Learn MERN Stack",
  "description": "Complete full stack projects"
}
```

## 🔄 Middleware Configuration

The application uses the following middleware:

| Middleware       | Purpose                              |
| ---------------- | ------------------------------------ |
| `express.json()` | Parse incoming JSON requests         |
| `cors()`         | Allow frontend-backend communication |
| `dotenv`         | Load environment variables           |
| `errorHandler`   | Handle application errors globally   |

## 🔐 CORS Configuration

The backend allows requests from the React development server:

```javascript
origin: "http://localhost:5173";
```

Allowed HTTP methods:

- GET
- POST
- PUT
- DELETE

## ⚠️ Error Handling

The backend includes:

- 404 Not Found Handler.
- Global Error Handler.
- Database Connection Error Handling.
- Server Startup Error Handling.

## ▶️ Server Startup Process

1. Load environment variables using dotenv.
2. Establish the database connection.
3. Initialize the Express application.
4. Configure middleware and API routes.
5. Start the server after successful database connection.

## 🎯 Learning Objectives

This project demonstrates practical implementation of:

- Node.js and Express.js.
- RESTful API Development.
- CRUD Operations.
- Express Routing.
- Middleware Implementation.
- Database Connectivity.
- Environment Variables.
- CORS Configuration.
- Centralized Error Handling.
- Async/Await.

## 🧪 API Testing

You can test the backend endpoints using:

- Postman
- Thunder Client
- Browser (GET requests)

## 👩‍💻 Author

## Ankita Mahaseth

Developed as a Full Stack Development Practice Project.

**Frontend:** React.js + Vite

**Backend:** Node.js + Express.js

**Database:** Configured through the database connection module.
