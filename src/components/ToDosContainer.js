import React from 'react';
import ToDoItem from './ToDoItem';

function ToDosContainer() {
    const data = [                                  // wir scheren uns nicht darum, woher die Daten kommen
        { text: 'Do your thing', status: false, id: 146587 },
        { text: 'Be yourself', status: false, id: 456845 },
        { text: 'Explain something', status: false, id: 324864 },
        { text: 'Be a dog', status: false, id: 798151 },            // wenn die vier entfernt, verschwindet der container unten
    ]

    // so werden Listen gemacht
    const todoItems = data.map(el => {      // el wird noch nicht benutzt
        return <ToDoItem key={el.id}></ToDoItem>           // nicht mehr $
    });

    console.log(todoItems);

    return (
        <div className="todos-container">
            {data.length > 0 && (
                <div className="todos">
                    <h5>TODOS</h5>
                    {/* <ToDoItem></ToDoItem>   // ist eins von den vier items, gibt sie automatisch wieder */}
                    {todoItems}               // z. 12 
                </div>
            )}
        </div>
    );
}

export default ToDosContainer;