import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

function MainContainer() {
  return (
    <main className="main-container">
      <FormContainer></FormContainer>
      <ToDosContainer></ToDosContainer>
      <ToDonesContainer></ToDonesContainer>
    </main>
  );
}

export default MainContainer;