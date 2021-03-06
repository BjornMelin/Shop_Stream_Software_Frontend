/**
 * Main App Function used as the root of the ShopStream App
 */
import React from 'react';
// Login Page
import SignIn from './containers/Login/SignIn';
// Dashboard Pages Per User Permissions
import Dashboard from './containers/Dashboard/Dashboards/Dashboard';
import CSRDashboard from './containers/Dashboard/Dashboards/CSRDashboard';
import InspectorDashboard from './containers/Dashboard/Dashboards/InspectorDashboard';
import OperatorDashboard from './containers/Dashboard/Dashboards/OperatorDashboard';
// User Profile & Account Pages
import UserProfile from './containers/user/UserProfile';
import UserAccount from './containers/user/UserAccount';
// Job Pages
import Jobs from './containers/jobs/Jobs';
import JobsEdit from './containers/jobs/JobsEdit';
import JobsCreate from './containers/jobs/JobsCreate';
import JobsView from './containers/jobs/JobsView';
// Inventory Pages
import Inventory from './containers/inventory/Inventory';
import InventoryAdd from './containers/inventory/InventoryAdd';
import InventoryEdit from './containers/inventory/InventoryEdit';
import InventoryView from './containers/inventory/InventoryView';
// Customer Pages
import Customers from './containers/customers/Customers';
import CustomersAdd from './containers/customers/CustomersAdd';
import CustomersEdit from './containers/customers/CustomersEdit';
import CustomersView from './containers/customers/CustomersView';
// Inspection Pages
import Inspections from './containers/inspections/Inspections';
import InspectionsSubmit from './containers/inspections/InspectionSubmit';
import InspectionsView from './containers/inspections/InspectionsView';
import InspectionsEdit from './containers/inspections/InspectionsEdit';
// Shifts Pages
import Shifts from './containers/shifts/Shifts';
import ShiftsAdd from './containers/shifts/ShiftsAdd';
import ShiftsView from './containers/shifts/ShiftsView';
import ShiftsEdit from './containers/shifts/ShiftsEdit';
// Part Setup Pages
import PartSetup from './containers/partSetup/PartSetup';
import PartSetupAdd from './containers/partSetup/PartSetupAdd';
import PartSetupView from './containers/partSetup/PartSetupView';
import PartSetupEdit from './containers/partSetup/PartSetupEdit';
// Admin User Management
import AdminUserMgt from './containers/ManageUsers/AdminUserMgt';
import CreateUser from './containers/ManageUsers/CreateUser';
import ViewUsers from './containers/ManageUsers/ViewUsers';
import EditUsers from './containers/ManageUsers/EditUsers';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";



/**
 * App function.  Used to navigate throughout ShopStream
 * & to store the links to each page in the app
 */
export default function App() {

  /**
   * Returns routes (links) to all pages within the ShopStream app
   */
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

          {/* Link to SignIn page */}
          <Route exact path="/">
            <SignIn />
          </Route>


          {/* Links to Dashboard pages */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/csr-dashboard">
            <CSRDashboard />
          </Route>
          <Route path="/inspector-dashboard">
            <InspectorDashboard />
          </Route>
          <Route path="/operator-dashboard">
            <OperatorDashboard />
          </Route>

          <Route path="/user-profile">
            <UserProfile />
          </Route>
          <Route path="/user-account">
            <UserAccount />
          </Route>


          {/* Links to Jobs pages */}
          <Route exact path="/jobs" >
            <Jobs />
          </Route>
          <Route exact path="/jobs/create-job">
            <JobsCreate />
          </Route>
          <Route exact path="/jobs/view-jobs" >
            <JobsView />
          </Route>
          <Route exact path="/jobs/edit-jobs" >
            <JobsEdit />
          </Route>


          {/* Links to Inventory pages */}
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/inventory/add-inventory">
            <InventoryAdd />
          </Route>
          <Route exact path="/inventory/update-inventory">
            <InventoryEdit />
          </Route>
          <Route exact path="/inventory/view-inventory">
            <InventoryView />
          </Route>


          {/* Links to Customer pages */}
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route exact path="/customers/list-customers">
            <CustomersView />
          </Route>
          <Route exact path="/customers/add-customer">
            <CustomersAdd />
          </Route>
          <Route exact path="/customers/edit-customers">
            <CustomersEdit />
          </Route>


          {/* Links to Inspection pages */}
          <Route exact path="/inspections">
            <Inspections />
          </Route>
          <Route exact path="/inspections/submit-inspection">
            <InspectionsSubmit />
          </Route>
          <Route exact path="/inspections/view-inspections">
            <InspectionsView />
          </Route>
          <Route exact path="/inspections/edit-inspections">
            <InspectionsEdit />
          </Route>


          {/* Links to Shifts pages */}
          <Route exact path="/shifts">
            <Shifts />
          </Route>
          <Route exact path="/shifts/add-shift">
            <ShiftsAdd />
          </Route>
          <Route exact path="/shifts/view-shifts">
            <ShiftsView />
          </Route>
          <Route exact path="/shifts/edit-shifts">
            <ShiftsEdit />
          </Route>


          {/* Links to Part Setups pages */}
          <Route exact path="/part-setup">
            <PartSetup />
          </Route>
          <Route exact path="/part-setup/new-part-setup">
            <PartSetupAdd />
          </Route>
          <Route exact path="/part-setup/view-part-setups">
            <PartSetupView />
          </Route>
          <Route exact path="/part-setup/edit-part-setups">
            <PartSetupEdit />
          </Route>


          {/* Links to User Management pages */}
          <Route exact path="/user-mgt">
            <AdminUserMgt />
          </Route>
          <Route exact path="/user-mgt/create-user">
            <CreateUser />
          </Route>
          <Route exact path="/user-mgt/view-users">
            <ViewUsers />
          </Route>
          <Route exact path="/user-mgt/edit-users">
            <EditUsers />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
