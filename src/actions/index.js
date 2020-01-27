export const updateTodo = payload => {        // updateTodo ist function that returns object with type und payload; Name created now
  return {
    type: 'UPDATE_TODO',
    payload
  };
};