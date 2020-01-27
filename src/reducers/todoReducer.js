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

const todoReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_TODO') {
    const items = state.items.map(el => {
      if (el._id === action.payload._id) {
        el.status = !el.status;
      }

      return el;
    });

    return { items: items };
  }

  return { ...state };
};

export default todoReducer;
