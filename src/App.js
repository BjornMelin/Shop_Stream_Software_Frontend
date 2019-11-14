import React from 'react';
import SignIn from './containers/SignIn';
import Dashboard from './containers/Dashboard/Dashboard';
import SignUp from './containers/SignUp';
import Orders from './containers/orders/Orders';
import OrdersEdit from './containers/orders/OrdersEdit';
import OrdersPlace from './containers/orders/OrdersPlace';
import OrdersPrevious from './containers/orders/OrdersPrevious';
import Customers from './containers/customers/Customers';
import Inventory from './containers/inventory/Inventory';
import Production from './containers/production/Production';
import Projects from './containers/projects/Projects';




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
          <Route path="/orders" >
            <Orders />
          </Route>
          <Route path="/orders/placeorder" >
            <OrdersPlace />
          </Route>
          <Route path="/orders/editorders" >
            <OrdersEdit />
          </Route>
          <Route path="/orders/previousorders" >
            <OrdersPrevious />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/production">
            <Production />
          </Route>
          <Route path="/production/genreport">
            <Production />
          </Route>
          <Route path="/production/assignproject">
            <Production />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/reviews">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
