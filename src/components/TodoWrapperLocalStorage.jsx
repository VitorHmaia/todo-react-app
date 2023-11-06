import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

export const TodoWrapperLocalStorage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Função para carregar os todos do LocalStorage
    const loadTodosFromLocalStorage = () => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
    };

    loadTodosFromLocalStorage(); // Carrega os todos ao montar o componente
  }, []);

  // Função para atualizar os todos no estado e no LocalStorage
  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
    const newTodos = [...todos, newTodo];
    updateTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(newTodos);
  };

  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    updateTodos(newTodos);
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    updateTodos(newTodos);
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
        <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
  ) : (
    <Todo
      task={todo}
      key={todo.id} // Aqui está a chave única
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  )
)}

    </div>
  );
};
