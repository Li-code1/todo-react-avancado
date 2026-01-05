import { memo } from "react";
import { useTodos } from "./TodoContext";

const TodoItem = memo(({ todo }) => {
  const { toggleTodo, removeTodo } = useTodos();

  console.log("Render TodoItem:", todo.text);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        aria-label={`Concluir ${todo.text}`}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
    </li>
  );
});

export default TodoItem;
