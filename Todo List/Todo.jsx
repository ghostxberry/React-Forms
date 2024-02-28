import React from 'react';

function Todo({ todo, handleDeleteTodo }) {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={handleDeleteTodo}>X</button>
    </div>
  );
}

export default Todo;
