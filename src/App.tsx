import React from "react";
import { useState } from "react";
import { FilterType, Todo } from "./types/todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
      startDate: new Date(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-12 text-center">Todo list</h1>
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
}

export default App;
