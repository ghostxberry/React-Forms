import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NewTodoForm handleAddTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} handleDeleteTodo={() => handleDeleteTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
