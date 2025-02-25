import React from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center p-6 text-gray-500">
        No tasks yet. Add some tasks to get started!
      </div>
    );
  }
  return (
    <div className="  rounded-md shadow-sm overflow-hidden">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
export default TodoList;
