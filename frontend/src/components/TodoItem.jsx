import React from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-4 h-4"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => alert("Delete todo: " + todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
