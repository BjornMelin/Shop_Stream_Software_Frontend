/**
 * Main Dashboard App Bar List Dropdown.
 * Allows a user to select which page they want to view
 * from a list of 7 main options.
 * 
 * Note: Need to make this page so that it will only show 
 * certain buttons in the list based on a users permissions.
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import BuildIcon from '@material-ui/icons/Build';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link } from "react-router-dom";


/**
 * Const Main List Items Containing Main List Items For 
 * App Bar Drawer Dropdown.  Each list item is a button which 
 * when clicked will route you to the corresponding page.
 */
export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard" id="dashButton">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button component={Link} to="/jobs" id="jobsButton">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs"  />
    </ListItem>
    <ListItem button component={Link} to="/inventory" id="invButton">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItem>
    <ListItem button component={Link} to="/customers" id="custButton">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button component={Link} to="/inspections" id="inspectButton">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Inspections" />
    </ListItem>
    <ListItem button component={Link} to="/shifts" id="shiftsButton">
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Shifts" />
    </ListItem>
    <ListItem button component={Link} to="/part-setup" id="partSetupButton">
      <ListItemIcon>
        <RateReviewIcon />
      </ListItemIcon>
      <ListItemText primary="Part Setup" />
    </ListItem>
    <ListItem button component={Link} to="/user-mgt" id="adminUserMgtButton">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User Management" />
    </ListItem>
  </div>
);
