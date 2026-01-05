import { useState } from "react";
import { useTodos } from "./TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Nova tarefa</label>
      <input
        id="task"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite sua tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
