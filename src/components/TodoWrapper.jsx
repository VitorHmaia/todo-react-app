import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: uuidv4(),
      task: todoText,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

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
