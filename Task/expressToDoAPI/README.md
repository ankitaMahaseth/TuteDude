# To-Do List REST API

A simple **To-Do List REST API** built using Node.js and Express.js. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using Express.js and an in-memory JavaScript array.

## 🚀 Project Overview

The To-Do List API allows users to manage their daily tasks through RESTful API endpoints.

Users can:
- Retrieve all tasks.
- Add new tasks.
- Update existing tasks.
- Delete tasks using their unique ID.

**Note:** This project uses dummy data stored in an in-memory array. MongoDB or any other database is not used.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman (API Testing)

## ✨ Features

1. **GET:** Retrieve all available tasks.
2. **POST:** Add a new task.
3. **PUT:** Update an existing task.
4. **DELETE:** Delete a task using its ID.
5. JSON request and response handling.
6. Basic task existence validation.
7. HTTP status code handling.

## 📁 Project Structure

```text
todo-list-api/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd todo-list-api
```

### 3. Initialize npm

```bash
npm init -y
```

### 4. Install Express.js

```bash
npm install express
```

### 5. Run the Server

```bash
node app.js
```

The server will start on:

```text
http://localhost:3000
```

Expected console output:

```text
Server is running on port 3000
```

## 📌 API Endpoints

Base URL:

```text
http://localhost:3000
```

### 1. Get All Tasks

**Method:** GET

**Endpoint:**

```text
/
```

**Complete URL:**

```text
http://localhost:3000/
```

**Description:** Retrieves all available tasks.

**Sample Response:**

```json
{
  "success": true,
  "tasks": [
    {
      "_id": "101",
      "title": "Learn React Hooks",
      "description": "Practice useState, useEffect and useContext",
      "completed": false
    },
    {
      "_id": "102",
      "title": "Complete MERN Stack Project",
      "description": "Finish the To-Do List application and test all functionalities",
      "completed": true
    }
  ]
}
```

### 2. Add a New Task

**Method:** POST

**Endpoint:**

```text
/add
```

**Complete URL:**

```text
http://localhost:3000/add
```

**Description:** Adds a new task to the To-Do List.

**Request Body:**

```json
{
  "_id": "103",
  "title": "Learn Node.js",
  "description": "Practice Express.js and REST APIs",
  "completed": false
}
```

**Sample Response:**

```json
{
  "success": true,
  "message": "Task added successfully",
  "tasks": []
}
```

*Note: The actual response contains the complete updated task array.*

### 3. Update an Existing Task

**Method:** PUT

**Endpoint:**

```text
/update
```

**Complete URL:**

```text
http://localhost:3000/update
```

**Description:** Updates an existing task using its unique ID.

**Request Body:**

```json
{
  "id": "101",
  "title": "Learn MERN Stack",
  "description": "Practice React, Node.js, Express and MongoDB",
  "completed": true
}
```

**Sample Response:**

```json
{
  "success": true,
  "message": "Task updated successfully",
  "task": {
    "_id": "101",
    "title": "Learn MERN Stack",
    "description": "Practice React, Node.js, Express and MongoDB",
    "completed": true
  }
}
```

### 4. Delete an Existing Task

**Method:** DELETE

**Endpoint:**

```text
/delete
```

**Complete URL:**

```text
http://localhost:3000/delete
```

**Description:** Deletes a task using its unique ID.

**Request Body:**

```json
{
  "id": "101"
}
```

**Sample Response:**

```json
{
  "success": true,
  "message": "Task deleted successfully",
  "tasks": []
}
```

*Note: The actual response contains the remaining tasks.*

## 📊 HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Request successful |
| 201 | Task created successfully |
| 400 | Bad request / Invalid input |
| 404 | Task not found |

## 🧪 API Testing with Postman

You can test all API endpoints using Postman.

1. Start the Express server.
2. Open Postman.
3. Select the required HTTP method (GET, POST, PUT, DELETE).
4. Enter the API URL.
5. For POST, PUT and DELETE, select **Body → raw → JSON**.
6. Enter the required JSON request data.
7. Click Send.
8. Verify the response and HTTP status code.


## 👩‍💻 Author

**Ankita Mahaseth**

**MERN Stack Developer**

This project was created as a learning exercise to understand Express.js and REST API development.

---