import React from 'react';
import { updateTodo } from '../actions';
import { connect } from 'react-redux';

const ToDoItem = props => {
  console.log(props);       // object mit data, items (state that comes from mapstate). updateTodo (method)
  
  return (
    <div className="item">
      <p>{props.data.text}</p>
      <button className="btn" onClick={() => props.updateTodo(props.data)}>   
        {props.data.status ? '☑' : '☐'}
      </button>
    </div>
  );
};

const mapStateToProps = state => {        // 
  return state;
};

export default connect(mapStateToProps, { updateTodo })(ToDoItem);
//export default ToDoItem;
// props.data = payload von actions