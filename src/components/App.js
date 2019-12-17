import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;


// oder nur <Navigation/> 