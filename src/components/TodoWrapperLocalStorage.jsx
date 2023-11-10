import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

const TodoWrapperLocalStorage = () => {
  /**
   * Componente `TodoWrapperLocalStorage` gerencia uma lista de tarefas com persistência no LocalStorage.
   *
   * @returns {JSX.Element} - Um elemento JSX que representa a aplicação To-Do com LocalStorage.
   */
  // Estado para armazenar a lista de tarefas.
  const [todos, setTodos] = useState([]);

  // Efeito que carrega os todos do LocalStorage ao montar o componente.
  useEffect(() => {
    const loadTodosFromLocalStorage = () => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
    };

    loadTodosFromLocalStorage();
  }, []);

  // Função para atualizar os todos no estado e no LocalStorage.
  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Função para adicionar uma nova tarefa à lista.
  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    const newTodos = [...todos, newTodo];
    updateTodos(newTodos);
  };

  // Função para alternar o status de conclusão de uma tarefa.
  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodos(newTodos);
  };

  // Função para excluir uma tarefa da lista.
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(newTodos);
  };

  // Função para alternar o modo de edição de uma tarefa.
  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    updateTodos(newTodos);
  };

  // Função para editar o texto de uma tarefa.
  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    );
    updateTodos(newTodos);
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {/* Mapeia a lista de todos para renderizar cada tarefa ou formulário de edição. */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapperLocalStorage;
