import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:3000/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET: Fetch all todos
export const getAllTodos = async () => {
  const response = await API.get("/");
  return response.data;
};

// POST: Create todo
export const createTodo = async (todoData) => {
  const response = await API.post("/", todoData);
  return response.data;
};

// GET: Fetch todo by ID
export const getTodoById = async (id) => {
  const response = await API.get(`/${id}`);
  return response.data;
};

// PUT: Update todo
export const updateTodo = async (id, todoData) => {
  const response = await API.put(`/${id}`, todoData);
  return response.data;
};

// DELETE: Delete todo
export const deleteTodo = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};
