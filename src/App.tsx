import React from "react";
import { useState, useEffect } from "react";
import { FilterType, Todo } from "./types/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
      startDate: new Date(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mx-auto p-8 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl shadow-xl ">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Todo list
        </h1>
        <TodoForm onAddTodo={addTodo} />
        <div className="my-6">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
