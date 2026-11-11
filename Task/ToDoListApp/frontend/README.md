# 📝 Todo Management App – Frontend

A responsive Todo Management Application built using **React.js, Vite, and Tailwind CSS**. This application allows users to create, view, update, delete, and search their daily tasks through a simple and user-friendly interface.

## 🚀 Features

- **Add Todo:** Create new tasks.
- **View Todos:** Display all saved tasks.
- **Update Todo:** Edit existing tasks.
- **Delete Todo:** Remove unwanted tasks.
- **Search Todo:** Search tasks by title.
- **Clear Search:** Reset the search input.
- **Loading State:** Display a loading message while fetching data.
- **Error Handling:** Display appropriate error messages.
- **API Integration:** Communicate with the backend using Axios.

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Axios
- HTML5
- CSS3

## 📁 Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
    |   |---TodoItem.jsx
│   │   └── TodoList.jsx
│   │
│   ├── services/
│   │   └── todoApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_FRONTEND_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Backend API URL

Update the API base URL in `src/services/todoApi.js` to point to your backend server.

Example:

```javascript
const API_URL = "http://localhost:3000/todos";
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will run at:

http://localhost:5173

## 🔗 Backend Integration

The frontend communicates with the Express.js backend through REST API endpoints.

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/todos`     | Fetch all todos   |
| POST   | `/todos`     | Create a new todo |
| PUT    | `/todos/:id` | Update a todo     |
| DELETE | `/todos/:id` | Delete a todo     |

## 💡 Application Workflow

1. User enters task details in the Todo Form.
2. Frontend sends a POST request to create a todo.
3. Existing todos are fetched from the backend.
4. Users can edit or delete individual tasks.
5. Users can search tasks by title.
6. Updated data is synchronized with the backend.

## 🎯 Learning Objectives

This project demonstrates practical implementation of:

- React Functional Components.
- React Hooks (`useState`, `useEffect`).
- Props and Component Communication.
- REST API Integration.
- Axios HTTP Requests.
- CRUD Operations.
- Conditional Rendering.
- Search and Filtering.
- Async/Await and Error Handling.

## 👩‍💻 Author

## Ankita Mahaseth

Developed as a Full Stack Development Practice Project.

**Frontend:** React.js

**Backend:** Node.js + Express.js

**Database:** Configured through the backend database connection.
