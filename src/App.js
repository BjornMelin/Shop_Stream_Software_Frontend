import React from 'react';
import SignIn from './containers/Login/SignIn';
import Dashboard from './containers/Dashboard/Dashboard';
import SignUp from './containers/Login/SignUp';

import Orders from './containers/orders/Orders';
import OrdersEdit from './containers/orders/OrdersEdit';
import OrdersPlace from './containers/orders/OrdersPlace';
import OrdersPrevious from './containers/orders/OrdersPrevious';

import Customers from './containers/customers/Customers';

import Inventory from './containers/inventory/Inventory';
import InventoryGenReport from './containers/inventory/InventoryGenReport';
import InventoryUpdateInv from './containers/inventory/InventoryUpdateInv';

import Production from './containers/production/Production';
import Projects from './containers/projects/Projects';
import ProjectsAssignTools from './containers/projects/ProjectsAssignTools';
import ProjectsAssignMaterials from './containers/projects/ProjectsAssignMaterials';
import ProjectsDocProject from './containers/projects/ProjectsDocProject';




import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";




export default function App() {
  return (
    <Router>
      <div>

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
          <Route exact path="/orders" >
            <Orders />
          </Route>
          <Route exact path="/orders/placeorder">
            <OrdersPlace />
          </Route>
          <Route exact path="/orders/editorders" >
            <OrdersEdit />
          </Route>
          <Route exact path="/orders/previousorders" >
            <OrdersPrevious />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/inventory/update-mat-inv">
            <InventoryUpdateInv />
          </Route>
          <Route exact path="/inventory/genreport">
            <InventoryGenReport />
          </Route>
          <Route exact path="/production">
            <Production />
          </Route>
          <Route exact path="/production/genreport">
            <Production />
          </Route>
          <Route exact path="/production/assignproject">
            <Production />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/assigntools">
            <ProjectsAssignTools />
          </Route>
          <Route exact path="/projects/assignmaterials">
            <ProjectsAssignMaterials />
          </Route>
          <Route exact path="/projects/docproject">
            <ProjectsDocProject />
          </Route>
          <Route path="/reviews">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
