export const updateTodo = payload => {        // updateTodo ist function that returns object with type und payload; Name created now
  return {
    type: 'UPDATE_TODO',
    payload                 // whatever we pass in ... ; ist whole item; argument of the function; könnnte auch leer sein
  };
};

export const addTodo = payload => {
  return {
    type: 'ADD_TODO',
    payload
  };
};