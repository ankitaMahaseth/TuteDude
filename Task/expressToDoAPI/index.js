const express = require("express");

// Create Express application
const app = express();

// Middleware
app.use(express.json());

// Dummy data
let toDOList = [
  {
    _id: "101",
    title: "Learn React Hooks",
    description: "Practice useState, useEffect and useContext",
    completed: false,
  },
  {
    _id: "102",
    title: "Complete MERN Stack Project",
    description:
      "Finish the To-Do List application and test all functionalities",
    completed: true,
  },
];
// Port number
const port = 3000;

// GET: Retrieve all tasks
// http://localhost:3000
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    tasks: toDOList,
  });
});

// POST: Add a new task
// http://localhost:3000/add
app.post("/add", (req, res) => {
  const newTask = req.body;

  toDOList.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task added successfully",
    tasks: toDOList,
  });
});

// DELETE: Delete a task
// http://localhost:3000/delete
app.delete("/delete", (req, res) => {
  const itemToDelete = req.body.id;

  // Validate ID
  if (!itemToDelete) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid task ID",
    });
  }

  // Check whether task exists
  const taskExists = toDOList.some((item) => item._id === itemToDelete);

  if (!taskExists) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  // Remove task using ID
  toDOList = toDOList.filter((item) => item._id !== itemToDelete);

  // Send response
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    tasks: toDOList,
  });
});

// PUT: Update a task
// http://localhost:3000/update
app.put("/update", (req, res) => {
  const { id, title, description, completed } = req.body;

  // Validation
  if (!id || !title || !description || typeof completed !== "boolean") {
    return res.status(400).json({
      success: false,
      message: "Please provide valid task details",
    });
  }

  // Find task index
  const taskIndex = toDOList.findIndex((item) => item._id === id);

  // Check whether task exists
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  // Update task
  toDOList[taskIndex] = {
    ...toDOList[taskIndex],
    title: title.trim(),
    description: description.trim(),
    completed: completed,
  };

  // Send response
  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    task: toDOList[taskIndex],
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
