import React from 'react';
import ToDoItem from './ToDoItem';

// function ToDonesContainer(props) {
//   const data = props.items;

//   const todoneItems = data.map(el => {
//     return <ToDoItem key={el.id} text={el.text} status={el.status}></ToDoItem>;
//   });

//   return (
//     <div className="todones-container">
//       {data.length > 0 && (
//         <div className="todones">
//           <h5>BACKLOG</h5>
//           {todoneItems}
//         </div>
//       )}
//     </div>
//   );
// }


class ToDonesContainer extends React.Component {
  updateItem = id => {
    this.props.updateFromChild(id);
  };

  render() {
    const data = this.props.items;

    const todoneItems = data.map(el => {
      return (
        <ToDoItem
          key={el.id}
          data={el}
          handleUpdate={this.updateItem}
        ></ToDoItem>
      );
    });

    return (
      <div className="todones-container">
        {data.length > 0 && (
          <div className="todones">
            <h5>BACKLOG</h5>
            {todoneItems}
          </div>
        )}
      </div>
    );
  }
}

export default ToDonesContainer;