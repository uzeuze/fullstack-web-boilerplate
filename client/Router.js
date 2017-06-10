import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName='active' to='/'>First Page</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/second'>Second Page</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route path="/second" component={SecondPage} />
            <Route render={() => <p>404 Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
