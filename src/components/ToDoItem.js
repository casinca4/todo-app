import React from 'react';

const ToDoItem = props => {
  function updateItem(e) {
    e.preventDefault();
    const item = props.data;
    props.handleUpdate(item);
  }

  return (
    <div className="item">
      <p>{props.data.task}</p>
      <button className="btn" onClick={updateItem}>
        {props.data.done ? '☑' : '☐'}
      </button>
    </div>
  );
};


// function ToDoItem(props) {
//   // props.task
//   // props.done
//   return (
//     <div className="item">
//       <p>{props.task}</p>
//       <button className="btn">CHECK</button>
//     </div>
//   );
// }

export default ToDoItem;