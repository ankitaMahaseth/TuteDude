import { useState, useEffect } from "react";

function TodoForm({ onAddTodo, onUpdateTodo, editingTodo, onCancelEdit }) {
  const today = new Date().toISOString().split("T")[0];

  const initialFormData = {
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: today,
  };

  const [formData, setFormData] = useState(initialFormData);

  // Populate form when editing
  useEffect(() => {
    if (editingTodo) {
      setFormData({
        title: editingTodo.title || "",
        description: editingTodo.description || "",
        status: editingTodo.status || "pending",
        priority: editingTodo.priority || "medium",
        dueDate: editingTodo.dueDate
          ? new Date(editingTodo.dueDate).toISOString().slice(0, 10)
          : today,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editingTodo]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a todo title");
      return;
    }

    try {
      let success;

      if (editingTodo) {
        success = await onUpdateTodo(editingTodo.id, formData);
      } else {
        success = await onAddTodo(formData);
      }

      if (success === false) return;

      setFormData({
        ...initialFormData,
        dueDate: new Date().toISOString().split("T")[0],
      });

      if (editingTodo) {
        onCancelEdit();
      }
    } catch (error) {
      console.error("Todo submission failed:", error);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData(initialFormData);
    onCancelEdit();
  };

  // Reusable input styling
  const inputClass =
    "w-full min-w-0 rounded-lg border border-white/20 bg-white px-3 py-2.5 text-gray-800 outline-none focus:ring-2 focus:ring-blue-400";

  const labelClass = "block mb-2 text-sm font-semibold text-white";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl mb-5 font-bold">
        {editingTodo ? "Edit Todo" : "Add New Todo"}
      </h2>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full bg-blue-900/60 p-4 sm:p-6 rounded-xl shadow-lg"
      >
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Title */}
          <div className="min-w-0">
            <label className={labelClass}>Task Title *</label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title..."
              className={inputClass}
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Priority */}
          <div className="min-w-0">
            <label className={labelClass}>Task Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Status */}
          <div className="min-w-0">
            <label className={labelClass}>Task Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="min-w-0">
            <label className={labelClass}>Due Date</label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Description */}
          <div className="sm:col-span-2 min-w-0">
            <label className={labelClass}>Task Description</label>

            <textarea
              name="description"
              placeholder="Enter task description..."
              rows="4"
              className={`${inputClass} resize-y`}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-lg px-6 py-3 bg-green-600 hover:bg-green-700 transition font-semibold"
          >
            {editingTodo ? "Update Todo" : "Add Todo"}
          </button>

          {editingTodo && (
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-semibold"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
