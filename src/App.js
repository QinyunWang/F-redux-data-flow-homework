import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { modules } from './utils';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Header />
          <Menu />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {modules.map(({ path, component }) => (
                <Route key={path} path={path}>
                  {component}
                </Route>
              ))}
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
