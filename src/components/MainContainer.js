import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';
import NotFound from './NotFound';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      feedback: false,
      showFriend: false
    };
  }

  // async componentDidMount() {
  //   if (data.length === 0)
  //     this.setState({
  //       items: data,
  //       loading: false,
  //       feedback: false,
  //       showFriend: true
  //     });
  //   else {
  //     this.setState({
  //       items: data,
  //       loading: false,
  //       feedback: false,
  //       showFriend: false
  //     });
  //   }
  // }

  render() {
    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.state.feedback && (
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.showFriend ? (
          <span>
            <ToDosContainer></ToDosContainer>
            <ToDonesContainer></ToDonesContainer>
          </span>
        ) : (
          <NotFound></NotFound>
        )}
      </main>
    );
  }
}

const mapsStateToProps = state => {
  return { items: state.items };
};

export default connect(mapsStateToProps)(MainContainer);
