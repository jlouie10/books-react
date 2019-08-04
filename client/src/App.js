import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Bookshelf, Main, Nav, Search } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Main>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/bookshelf" component={Bookshelf} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
