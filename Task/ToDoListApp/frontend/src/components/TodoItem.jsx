import { FaCheckCircle, FaClock, FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

function TodoItem({ todo, onUpdate, onDelete ,onEdit}) {
  const isCompleted = todo.status === "completed";

  const handleStatusChange = () => {
    onUpdate(todo.id, {
      status: isCompleted ? "pending" : "completed",
    });
  };

  const handleDelete = async () => {
    await onDelete(todo.id);
  };

  const handleEdit = async () => {
    await onEdit(todo.id);
  };

  const priorityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  const formattedDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleDateString("en-IN")
    : "Not set";

  return (
    <>
      <div className="w-full min-w-0 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
        {/* Task Header */}
        <div className="flex justify-between items-start gap-3 mb-3">
          {/* Todo Title & Description */}
          <div className="min-w-0 flex-1">
            <h3
              className={`text-lg font-semibold ${
                isCompleted ? "text-gray-400 line-through" : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>

            <p className="w-full text-sm text-gray-500 mt-1">
              {todo.description || "No description provided"}
            </p>
          </div>

          {/* Task Default Status */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
              isCompleted
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {isCompleted ? "Completed" : "Pending"}
          </span>
        </div>

        {/* Task Priority */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-500">Priority:</span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
              priorityColors[todo.priority] || "bg-gray-100 text-gray-700"
            }`}
          >
            {todo.priority}
          </span>
        </div>

        {/* Due Date */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium">Due Date:</span> {formattedDate}
        </div>

        {/* Task Action Buttons */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={handleStatusChange}
            className={`flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium transition ${
              isCompleted
                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isCompleted ? <FaClock /> : <FaCheckCircle />}
            {isCompleted ? " Pending" : "Completed"}
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <FaTrash />
            Delete
          </button>
          <button
            type="button"
           onClick={() => onEdit(todo)}
            className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <FaEdit />
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
