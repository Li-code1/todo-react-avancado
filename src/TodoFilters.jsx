import { useTodos } from "./TodoContext";

export default function TodoFilters() {
  const { setFilter, filter } = useTodos();

  return (
    <nav aria-label="Filtros">
      <button onClick={() => setFilter("all")} aria-pressed={filter === "all"}>
        Todas
      </button>
      <button onClick={() => setFilter("pending")} aria-pressed={filter === "pending"}>
        Pendentes
      </button>
      <button onClick={() => setFilter("completed")} aria-pressed={filter === "completed"}>
        Concluídas
      </button>
    </nav>
  );
}
