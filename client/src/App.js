import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, Search, Nav } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Main>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
