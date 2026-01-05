import { TodoProvider } from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";

export default function App() {
  return (
    <TodoProvider>
      <main className="container">
        <h1>📝 Lista de Tarefas</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
