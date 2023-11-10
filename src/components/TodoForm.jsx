import React, { useState } from "react";

/**
 * Componente `TodoForm` é responsável por adicionar novas tarefas à lista.
 *
 * @param {function} addTodo - Função chamada para adicionar uma nova tarefa à lista.
 *
 * @returns {JSX.Element} - Um elemento JSX que representa o formulário de adição de tarefas.
 */
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // Define um estado local 'value' e uma função 'setValue' para atualizá-lo.

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página).

    if (value) {
      // Verifica se 'value' não está vazio.
      addTodo(value); // Chama a função 'addTodo' passando o valor do campo como argumento.

      setValue(""); // Limpa o campo após a submissão.
      
      // Persiste a tarefa no LocalStorage.
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || []; // Recupera os todos salvos no LocalStorage ou inicializa um array vazio.
      const newTodo = {
        id: new Date().getTime(), // Cria um ID baseado no timestamp.
        task: value, // Atribui o valor do campo como a tarefa.
        completed: false, // Define a tarefa como não concluída.
        isEditing: false, // Define a tarefa como não editável.
      };
      savedTodos.push(newTodo); // Adiciona a nova tarefa ao array de todos salvos.
      localStorage.setItem("todos", JSON.stringify(savedTodos)); // Salva o array atualizado no LocalStorage.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Atualiza o estado 'value' conforme o usuário digita.
        className="todo-input"
        placeholder="Qual tarefa para hoje?"
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
