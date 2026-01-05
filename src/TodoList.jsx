import { useTodos } from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodos();

  console.log("Render TodoList");

  if (!todos.length) return <p>Nenhuma tarefa.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
