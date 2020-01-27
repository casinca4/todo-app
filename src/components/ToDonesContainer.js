import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

class ToDonesContainer extends React.Component {
  render() {
    const data = this.props.items;

    const todoneItems = data.map(el => {
      return <ToDoItem key={el._id} data={el}></ToDoItem>;
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

const mapStateToProps = state => {
  return { items: state.items.filter(el => el.status) };
};

export default connect(mapStateToProps)(ToDonesContainer);
