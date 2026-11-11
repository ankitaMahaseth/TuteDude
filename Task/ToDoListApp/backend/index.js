const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Database connection
const DbConnection = require("./config/databaseConnection");

// Import routers
const todoRouter = require("./routes/todoRoutes");

// Create Express application
const app = express();

// Middleware
app.use(express.json());

// Middleware for connecting frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Routes
app.use("/todos", todoRouter);

/**
 * Route: /
 * Method: GET
 * Description: Welcome message
 * Access: Public
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the To Do List API",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global error handler (must be last)
app.use(errorHandler);

// Start server after database connection
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await DbConnection();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
