/**
 * GET Users DataGrid Component
 * Generates and displays a table containing a list of 
 * all users in the app database
 */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import superagent from 'superagent';
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



/**
 * Styles and formatting for this pages components
 */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  paper: {
    marginTop: theme.spacing(12),
    marginLeft: theme.spacing(28),
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
  },
}));



/**
 * GET Users Page Functional Component.
 */
export default function GetUsers() {
    const classes = useStyles();

    /**
     * Const - an array to contain all Users in the
     * app database
     */
    const [users, setUsers] = useState([]);


    /**
     * Column names and formats for the DataGrid of Users
     */    
    const columns = [
      new ColumnModel('username'),
      new ColumnModel('permission'),
      new ColumnModel('firstName'),
      new ColumnModel('lastName'),
      new ColumnModel('email')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all users within the database.  The function
     * parses out the returned JSON files and stores each user
     * as a seperate user object in an array
     */
    useEffect(() => {
      superagent.get('http://127.0.0.1:9000/api/getUsers')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).users;
          var userArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            userArray.push((data[i]));
          }
          setUsers(userArray);
        });
    }, [])


    /**
     * Returns the GET Users DataGrid.
     * Includes a DataGrid consisting of a list of all users
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all users from the app database */}
      <div className={classes.paper}>
        <DataGrid
            columns={columns}
            dataSource={users}
            gridName='Users List'
            />
      </div>
      </Container>
    )
}