import React from 'react';
import ToDoItem from './ToDoItem';

function ToDosContainer() {
  return (
    <div className="todos-container">
      <h5>TODOS</h5>
      <ToDoItem></ToDoItem>
    </div>
  );
}

export default ToDosContainer;