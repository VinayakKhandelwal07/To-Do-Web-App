import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import TodoItem from "../components/TodoItem";
import ProgressBar from "../components/ProgressBar";

const BoardDetails = () => {
  const { id } = useParams();

  const [todos, setTodos] = useState([
    { id: 1, title: "First Task", completed: false },
    { id: 2, title: "Second Task", completed: true },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo("");
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Board {id}</h1>
        <div className="mb-4">
          <ProgressBar completed={completedCount} total={todos.length} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="bg-white shadow rounded">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
          ))}
          {todos.length === 0 && (
            <p className="p-4 text-gray-500 text-center">No todos yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BoardDetails;
