const initialState = {
  items: [
    {
      status: true,
      _id: '5e2dfbf4cf11250007b73900',
      text: 'hey, go somewhere',
      date: '2020-01-26T20:52:04.184Z',
      __v: 0
    },
    {
      status: true,
      _id: '5e2dfdf1cf11250007b73901',
      text: 'Type your next todo item',
      date: '2020-01-26T21:00:33.974Z',
      __v: 0
    },
    {
      status: false,
      _id: '5e2e087405047b0007b54726',
      text: 'hey ',
      date: '2020-01-26T21:45:24.014Z',
      __v: 0
    },
    {
      status: false,
      _id: '5e2e087d05047b0007b54727',
      text: 'hey you',
      date: '2020-01-26T21:45:33.905Z',
      __v: 0
    },
    {
      status: false,
      _id: '5e2e094005047b0007b54728',
      text: 'something you have to do',
      date: '2020-01-26T21:48:48.693Z',
      __v: 0
    }
  ]
};

const todoReducer = (state = initialState, action) => {     // action triggers the reducer automatically
  // console.log(action.payload);
  // console.log(action.type);
  
  if (action.type === 'UPDATE_TODO') {
    
    const items = state.items.map(el => {       // el von dem array hier
      if (el._id === action.payload._id) {
        el.status = !el.status;                 // von todo zu todone und umgekehrt
      }

      return el;        // when you find el wenn beide gleich, nicht continue
    });

    return { items: items };    // und dann return items, updated with status of element that I clicked
  }

  if (action.type === 'ADD_TODO') {
    const newItem = {
      status: false,
      _id: new Date().getTime(),
      text: action.payload,
      date: '2020-01-26T20:52:04.184Z',
      __v: 0
    };

    state.items.push(newItem);
    return Object.assign({}, state);
  }
  
  return { ...state };          // dann return all the states updated, hier nur item; copy of state, man braucht pure function; { state, ... }; ... macht copy of first guy; copy as we don't want to return the initial state; we cannot return the real one
};

export default todoReducer;
