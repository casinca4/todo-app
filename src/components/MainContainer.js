import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import Spinner from './Spinner';


// function MainContainer() {
//   const data = [
//     { text: 'Do your thing', status: false, id: 1407892 },
//     { text: 'Be yourself', status: true, id: 1467892 },
//     { text: 'Explain something', status: false, id: 5436436 },
//     { text: 'Be a dog', status: true, id: 4363434 },
//     { text: 'Bite a tree', status: false, id: 1411892 },
//     { text: 'Plant a tree', status: false, id: 1117892 },
//     { text: 'Save the world', status: true, id: 5436222 },
//     { text: 'Achieve world peace', status: false, id: 4363333 }
//   ];

//   const todos = data.filter(el => !el.status);
//   const todones = data.filter(el => el.status); 
//   // const todos = data.filter(el => {if (!el.status) return el;});

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
//         { text: 'Do your thing', status: false, id: 1407892 },
//         { text: 'Be yourself', status: true, id: 1467892 },
//         { text: 'Explain something', status: false, id: 5436436 },
//         { text: 'Be a dog', status: true, id: 4363434 },
//         { text: 'Bite a tree', status: false, id: 1411892 },
//         { text: 'Plant a tree', status: false, id: 1117892 },
//         { text: 'Save the world', status: true, id: 5436222 },
//         { text: 'Achieve world peace', status: false, id: 4363333 }
//       ]
//     };
//   }

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  async componentDidMount() {
    const url = `https://ds-todo-api.now.sh/todos`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }


  handleUpdate = id => {
    const items = this.state.items;
    const updatedItems = items.map(el => {
      if (id === el.id) {
        el.status = !el.status;
      }

      return el;
    });

    this.setState({ items: updatedItems });
  };


  handleAddTodo = value => {
    const newItem = {
      text: value,
      status: false,
      id: new Date().getTime()
    };

    this.setState({ items: [...this.state.items, newItem] });
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

  render() {
    console.log('render RUN');

    const data = this.state.items;
    const todos = data.filter(el => !el.status);
    const todones = data.filter(el => el.status);
    // const todos = data.filter(el => {if (!el.status) return el;});

    
    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo}></FormContainer>
        {this.state.loading ? (
          <Spinner></Spinner>
        ) : (
          <span>
            <ToDosContainer
              items={todos}
              updateFromChild={this.handleUpdate}
            ></ToDosContainer>
            <ToDonesContainer
              items={todones}
              updateFromChild={this.handleUpdate}
            ></ToDonesContainer>
          </span>
        )}
      </main>
    );
  }
}


export default MainContainer;

// updateFromChild: property

// el.status = !el.status; from true to false

// status: false --> it's not done yet

// const braucht man nicht, wenn function does not return anything

// status is boolean

// status: false,          not done, deswegen false

// new Date: fake id brauchten wir, irgendwas

// this.setState({ items: [...this.state.items, newItem] });   items von oben, dazu noch newItem