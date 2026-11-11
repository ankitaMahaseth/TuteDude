import { useState, useEffect } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./services/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetch all todos
  const fetchTodos = async () => {
    try {
      setLoading(true);

      const response = await getAllTodos();

      setTodos(response.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  // 2. Load todos
  useEffect(() => {
    fetchTodos();
  }, [refresh]);

  // 3. Add todo
  const handleAddTodo = async (todoData) => {
    try {
      const response = await createTodo(todoData);

      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create todo");
    }
  };

  // 4. Update todo
  const handleUpdateTodo = async (id, todoData) => {
    try {
      if (!id) {
        throw new Error("Todo ID is missing");
      }

      await updateTodo(id, todoData);

      setRefresh((prev) => !prev);
      return true;
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to update todo",
      );

      return false;
    }
  };

  // 5. Delete todo
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);

      setRefresh((prev) => !prev);
    } catch (error) {
      alert("Failed to delete todo");
    }
  };

  // 6. Search todos
  const filteredTodos = todos.filter((todo) =>
    todo.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#172842] py-8 w-full text-white">
      <div className="px-5 w-full rounded-lg py-3 text-white shadow-md">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Manage Your Todos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Todo Form */}
          <div className="mx-5">
            <TodoForm
              onAddTodo={handleAddTodo}
              onUpdateTodo={handleUpdateTodo}
              editingTodo={editingTodo}
              onCancelEdit={() => setEditingTodo(null)}
            />
          </div>

          {/* Todo List */}
          <div>
            {loading ? (
              <p className="text-center">Loading todos...</p>
            ) : error ? (
              <p className="text-center text-red-400">{error}</p>
            ) : todos.length === 0 ? (
              <p className="text-center text-red-500 font-bold text-2xl">
                No todos found.
                <br />
                Add your first todo!
              </p>
            ) : (
              <div>
                {/* Search Input */}
                <div className="flex gap-2 mb-5">
                  <input
                    type="text"
                    placeholder="🔍 Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-white outline-none bg-white/20 "
                  />

                  <button
                    onClick={() => setSearchTerm("")}
                    className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Clear
                  </button>
                </div>

                {/* Search Results */}
                {filteredTodos.length === 0 ? (
                  <p className="text-center text-yellow-300">
                    No matching tasks found!
                  </p>
                ) : (
                  <TodoList
                    todos={filteredTodos}
                    onUpdate={handleUpdateTodo}
                    onDelete={handleDeleteTodo}
                    onEdit={setEditingTodo}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
