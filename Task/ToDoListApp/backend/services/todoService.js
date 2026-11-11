const { randomUUID } = require("crypto");

// Temporary in-memory storage
let todos = [
  {
    id: 1,
    title: "Task1",
    description: "This is demo task 1",
    status: "pending",
    priority: "medium",
    dueDate: null,
  },
];

let nextId = 2;

// GET: Retrieve all todos
const getAllTodos = async () => {
  return todos;
};

// GET: Retrieve todo by ID
const getTodoById = async (id) => {
  return todos.find((todo) => todo.id === parseInt(id));
};

// POST: Create a new todo
const createTodo = async (todoData) => {
  const newTodo = {
    id: nextId++,
    title: todoData.title,
    description: todoData.description || "",
    status: todoData.status || "pending",
    priority: todoData.priority || "medium",
    dueDate: todoData.dueDate || null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  todos.push(newTodo);

  return newTodo;
};

// PUT: Update an existing todo
const updateTodo = async (id, updateData) => {
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return null;
  }

  const allowedFields = [
    "title",
    "description",
    "status",
    "priority",
    "dueDate",
  ];

  const filteredData = Object.fromEntries(
    Object.entries(updateData).filter(([key]) => allowedFields.includes(key)),
  );

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...filteredData,
    updatedAt: new Date(),
  };

  return todos[todoIndex];
};

// DELETE: Delete an existing todo
const deleteTodo = async (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return null;
  }

  const deletedTodo = todos[todoIndex];

  todos.splice(todoIndex, 1);

  return deletedTodo;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
