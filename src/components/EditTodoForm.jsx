import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chama a função 'editTodo' passando o novo valor e o ID da tarefa.
    editTodo(value, task.id);

    // Atualiza o LocalStorage com a tarefa editada.
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = savedTodos.map((todo) =>
      todo.id === task.id ? { ...todo, task: value } : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // Limpa o campo após a submissão.
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
