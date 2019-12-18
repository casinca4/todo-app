import React from 'react';
import ToDoItem from './ToDoItem';

function ToDosContainer(props) {
    const data = props.items;
  
    // so werden Listen gemacht
    const todoItems = data.map(el => {      // el wird noch nicht benutzt
        return <ToDoItem key={el.id} text={el.text} status={el.status}></ToDoItem>           // nicht mehr $
    });

    console.log(todoItems);

    return (
        <div className="todos-container">
            {data.length > 0 && (               // wenn wahr, dann zeigt TODOS an; wenn nicht, dann nichts anzeigen
                <div className="todos">
                    <h5>TODOS</h5>
                    {/* <ToDoItem></ToDoItem>   // ist eins von den vier items, gibt sie automatisch wieder */}
                    {todoItems}           
                </div>  
            )}
        </div>
    );
}

export default ToDosContainer;

// {todoItems}   bezieht sich auf const todoItems