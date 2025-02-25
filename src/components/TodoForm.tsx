import React, { useState, FormEvent } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSumbit} className="mb-5">
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task.."
          className="flex-grow px-4 mr-5 border-black rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-black-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
