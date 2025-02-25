import { useState } from "react";
import { FilterType, Todo } from "./types/todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");
  const [newTodoTekst, setNewTodoTekst] = useState<string>("");

  return <h1>Siema</h1>;
}

export default App;
