const todoService = require("../services/todoService");

// GET: Retrieve all todos
const getAllTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getAllTodos();

    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};

// GET: Retrieve a single todo by ID
const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const todo = await todoService.getTodoById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

// POST: Create a new todo
const createTodo = async (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Todo title is required",
      });
    }

    const todo = await todoService.createTodo({
      title,
      description,
      status,
      priority,
      dueDate,
    });

    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

// PUT: Update an existing todo
const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await todoService.updateTodo(id, req.body);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE: Delete a todo
const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = await todoService.deleteTodo(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
