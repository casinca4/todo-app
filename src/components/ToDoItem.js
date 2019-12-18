import React from 'react';

function ToDoItem(props) {
  // props.text
  // props.status
  return (
    <div className="item">
      <p>{props.text}</p>
      <button className="btn">CHECK</button>
    </div>
  );
}

export default ToDoItem;