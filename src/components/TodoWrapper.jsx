import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";

// Recupera a lista de tarefas inicial do LocalStorage ou inicializa um array vazio.
const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

/**
 * Componente `TodoWrapper` é o componente principal que gerencia a lista de tarefas.
 *
 * @returns {JSX.Element} - Um elemento JSX que representa a aplicação To-Do.
 */
export const TodoWrapper = () => {
  // Define o estado dos todos, inicializado com a lista recuperada do LocalStorage.
  const [todos, setTodos] = useState(initialTodos);

  // Efeito colateral que atualiza o LocalStorage sempre que a lista de todos é modificada.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Função para adicionar uma nova tarefa à lista.
  const addTodo = (todoText) => {
    const newTodo = {
      id: uuidv4(),
      task: todoText,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Função para excluir uma tarefa da lista.
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Função para alternar o status de conclusão de uma tarefa.
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Função para alternar o modo de edição de uma tarefa.
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Função para editar o texto de uma tarefa.
  const editTask = (editedTask, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      {/* Mapeia a lista de todos para renderizar cada tarefa ou formulário de edição. */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        )
      )}
    </div>
  );
};
