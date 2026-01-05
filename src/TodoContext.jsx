import { createContext, useContext, useMemo, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    console.log("Filtrando tarefas...");
    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "pending") return todos.filter(t => !t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        setFilter,
        filter
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);
