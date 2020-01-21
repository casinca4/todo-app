import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import MainContainer from './MainContainer';
import NotFound from './NotFound';
import NewsContainer from './NewsContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// da Nav, Main, NotF und News importiert werden, sind sie children

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/news" component={NewsContainer}></Route>
          <Route exact path="/" component={MainContainer} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;


// oder nur <Navigation/> 