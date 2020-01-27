import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

class ToDosContainer extends React.Component {
  render() {
    const data = this.props.items;

    const todoItems = data.map(el => {
      return <ToDoItem key={el._id} data={el}></ToDoItem>;
    });

    return (
      <div className="todos-container">
        {data.length > 0 && (
          <div className="todos">
            <h5>TODOS</h5>
            {todoItems}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items.filter(el => !el.status) };
};

export default connect(mapStateToProps)(ToDosContainer);