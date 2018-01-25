import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Designer from '../Apps/Designer';
import Deployer from '../Apps/Deployer';
import Monitor from '../Apps/Monitor';
import './App.css';

/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/designer">Designer</Link>
          <Link to="/deployer">Deployer</Link>
          <Link to="/monitor">Monitor</Link>
        </header>
        <Switch>
          <Route path="/designer" component={Designer} />
          <Route path="/deployer" component={Deployer} />
          <Route path="/monitor" component={Monitor} />
        </Switch>
      </div>
    );
  }
}

export default App;
