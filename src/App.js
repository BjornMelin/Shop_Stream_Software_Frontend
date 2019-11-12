import React from 'react';

import SignIn from './containers/SignIn';
import Dashboard from './containers/Dashboard';
import SignUp from './containers/SignUp';
import Orders from './containers/orders/Orders';


import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";




export default function App() {
  return (
    <Router>
      <div>
      {/* <div>
        <ul>
          <li>
            <Link to="/">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

