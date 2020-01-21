import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';
import NotFound from './NotFound';

// function MainContainer() {
//   const data = [
//     { task: 'Do your thing', done: false, id: 1407892 },
//     { task: 'Be yourself', done: true, id: 1467892 },
//     { task: 'Explain something', done: false, id: 5436436 },
//     { task: 'Be a dog', done: true, id: 4363434 },
//     { task: 'Bite a tree', done: false, id: 1411892 },
//     { task: 'Plant a tree', done: false, id: 1117892 },
//     { task: 'Save the world', done: true, id: 5436222 },
//     { task: 'Achieve world peace', done: false, id: 4363333 }
//   ];

//   const todos = data.filter(el => !el.done);
//   const todones = data.filter(el => el.done); 
//   // const todos = data.filter(el => {if (!el.done) return el;});

//   return (
//     <main className="main-container">
//       <FormContainer></FormContainer>
//       <ToDosContainer items={todos}></ToDosContainer>
//       <ToDonesContainer items={todones}></ToDonesContainer>
//     </main>
//   );
// }


// class MainContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor RUN');
//     this.state = {
//       items: [
//         { task: 'Do your thing', done: false, id: 1407892 },
//         { task: 'Be yourself', done: true, id: 1467892 },
//         { task: 'Explain something', done: false, id: 5436436 },
//         { task: 'Be a dog', done: true, id: 4363434 },
//         { task: 'Bite a tree', done: false, id: 1411892 },
//         { task: 'Plant a tree', done: false, id: 1117892 },
//         { task: 'Save the world', done: true, id: 5436222 },
//         { task: 'Achieve world peace', done: false, id: 4363333 }
//       ]
//     };
//   }

class MainContainer extends React.Component {
  constructor(props) {      // can pass to children oder parent by event handler
    super(props);
    this.state = {
      items: [],
      loading: true,
      feedback: false,
      showFriend: false
    };
  }


  async componentDidMount() {
    const url = `https://todolist.platteantje.now.sh/tasks`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });
    try {
      const response = await fetch(url);
      const data = await response.json();     // once he fechs the date, it turns into json; 

      if (data.length === 0) {
        this.setState({
          items: data,      // wenn es data gibt, dann gehen die in array von oben, in dem Fall leer
          loading: false,   //  get todos back and load into app; loading button hört auf
          feedback: false,
          showFriend: true
        });
      }
      else {
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: false
        });
      }
    } catch (error) {
      this.setState({ feedback: true });
    }
  }


  handleUpdate = async item => {                // frontend part ; create or delete todo           
    const url = `https://todolist.platteantje.now.sh/tasks/${item._id}`;
    const done = !item.done;                // wieso ! ?? ist wie toggle
    this.setState({ loading: true });

    try {
      const response = await fetch(url, {
        method: 'PUT',              // update
        headers: {
          'Content-Type': 'application/json'        // convention
        },
        body: JSON.stringify({ done })        // stringify boolean, weil man es mit fetch so macht
      });

      const data = await response.json();     // data is not used????????  data brauchen wir nicht, aber response
      const items = this.state.items;     

      const updatedItems = items.map(el => {    // items: todos and todones
        if (item._id === el._id) {         // ?? ganze Kette,   in todoscontainer, kommt von todoitem, bei onclick; 
          el.done = !el.done;  // wie toggle; wenn es todo ist, wird es zu todone; if ...., then I change
        }

        return el;
      });

      this.setState({
        items: updatedItems,
        loading: false,
        feedback: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };


  handleAddTodo = async value => {
    const url = `https://todolist.platteantje.now.sh/tasks`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: value, done: false, owner: 'Swantje' })
      });
      const item = await response.json();
      this.setState({
        items: [...this.state.items, item],       // spread: newItem geht in this.state.items-array; ...: alles, was da war, + die, die ich poste (item)
        feedback: false,
        showFriend: false,
        loading: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };


  // componentDidMount() {
  //   console.log('componentDidMount RUN');
  //   const url = 'https://ds-todo-api.now.sh/todos';

  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate RUN');
  // }

  // componentWillUnmount() {
  //   debugger;
  // }

  render() {                      // setting global variables für return
    // console.log('render RUN');

    const data = this.state.items;        // items: array of all todos and todones
    const todos = data.filter(el => !el.done);
    const todones = data.filter(el => el.done);
    // const todos = data.filter(el => {if (!el.done) return el;});


    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        <div className="feedback">
          {this.state.feedback && (     // if feedback true, display message
            <small>Oops, our cat broke the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.showFriend ? (             // it's not ... if showfriend is false, show span
          <span>
            <ToDosContainer
              items={todos}
              updateFromChild={this.handleUpdate}   // updateFromChild ist in ToDosContainer, entspricht handleUpdate function
            ></ToDosContainer>
            <ToDonesContainer
              items={todones}
              updateFromChild={this.handleUpdate}
            ></ToDonesContainer>
          </span>
        ) : (
            <NotFound></NotFound>
          )}
      </main>
    );
  }
}


export default MainContainer;

// updateFromChild: property

// el.done = !el.done; from true to false

// done: false --> it's not done yet

// const braucht man nicht, wenn function does not return anything

// done is boolean

// done: false,          not done, deswegen false

// new Date: fake id brauchten wir, irgendwas

// this.setState({ items: [...this.state.items, newItem] });   items von oben, dazu noch newItem