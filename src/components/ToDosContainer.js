import React from 'react';
import ToDoItem from './ToDoItem';
import friend from '../images/friend.jpeg';

// function ToDosContainer(props) {
//     const data = props.items;

//     // so werden Listen gemacht
//     const todoItems = data.map(el => {      // el wird noch nicht benutzt
//         return <ToDoItem key={el.id} task={el.task} done={el.done}></ToDoItem>           
//     });

//     console.log(todoItems);

//     return (
//         <div className="todos-container">
//             {data.length > 0 && (               // wenn wahr, dann zeigt TODOS an; wenn nicht, dann nichts anzeigen; si hay data, dann zeigt er TODOS an; so ist die Schreibweise
//                 <div className="todos">
//                     <h5>TODOS</h5>
//                     {/* <ToDoItem></ToDoItem>   // ist eins von den vier items, gibt sie automatisch wieder */}
//                     {todoItems}           
//                 </div>  
//             )}
//         </div>
//     );
// }

class ToDosContainer extends React.Component {
  updateItem = item => {
    this.props.updateFromChild(item);
  };

  render() {
    const data = this.props.items;

    const todoItems = data.map(el => {
      return (
        <ToDoItem
          key={el._id}                          // _ von mongoose, s. Link
          data={el}                               // look in the database
          handleUpdate={this.updateItem}
        ></ToDoItem>
      );
    });

    return (
      <div className="todos-container">
        {data.length > 0 && (                    // 0 um etwas zu haben, brauchen wir in todonescontainer
          <div className="todos">
            <h5>TODOS</h5>
            {todoItems}
          </div>
        )} 
      </div>
    );
  }
}


export default ToDosContainer;

// {todoItems}   bezieht sich auf const todoItems