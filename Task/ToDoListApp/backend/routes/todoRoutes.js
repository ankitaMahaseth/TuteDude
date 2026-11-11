
const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// GET: Retrieve all todos
router.get("/", getAllTodos);

// GET: Retrieve a single todo by ID
router.get("/:id", getTodoById);

// POST: Create a new todo
router.post("/", createTodo);

// PUT: Update an existing todo
router.put("/:id", updateTodo);

// DELETE: Delete a todo
router.delete("/:id", deleteTodo);

module.exports = router;
