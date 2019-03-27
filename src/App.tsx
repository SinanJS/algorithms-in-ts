import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Welcome from './page/welcome';
import Sort from './page/sort/index';
import './App.css';

const customHistory = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <div className="App">
          <ul>
            <li>
              <Link to="/welcome">Home</Link>
            </li>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
          </ul>
          <Route path="/welcome" component={Welcome} />
          <Route path="/sort" component={Sort} />
        </div>
      </Router>
    );
  }
}

export default App;
