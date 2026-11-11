import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete,onEdit  }) {
  return (
    <>
      <h2 className="text-center text-2xl mb-5 font-bold">My Todo List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
