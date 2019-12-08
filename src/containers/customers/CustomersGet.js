/**
 * GET Customers DataGrid Component
 * Generates and displays a table containing a list of 
 * all customers in the app database
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
 * GET Customers Page Functional Component.
 */
export default function CustomersGet() {
    const classes = useStyles();


    /**
     * Const - an array containing all customers in the
     * app database
     */
    const [customers, setCustomers] = useState([]);


    /**
     * Column names and formats for the DataGrid of customers
     */
    const columns = [
      new ColumnModel('nameFirst'),
      new ColumnModel('nameLast'),
      new ColumnModel('companyName'),
      new ColumnModel('email'),
      new ColumnModel('phoneNum')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all customers within the database.  The function
     * parses out the returned JSON files and stores each customer
     * as a seperate customer object in an array
     */
    useEffect(() => {
      /**
       * GET request to the app database to get all customers
       */
      superagent.get('http://127.0.0.1:4000/api/getCustomers')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).customers; // parse out text from JSON
          var customerArray = []; // create an array to store customers from database
          console.log(data);
          /**
           * Loop which removes unwanted variables from the JSON customer
           * files then adds each customer into the array of customer
           */
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            customerArray.push((data[i]));
          }
          /**
           * sets the const customers array outside of the function to 
           * equal the array of customers generates from the JSONs returned 
           */
          setCustomers(customerArray);  
        });
    }, [])


    /**
     * Returns the GET Customers DataGrid.
     * Includes a DataGrid consisting of a list of all customers
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all customers from the app database */}
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={customers}
            gridName='Grid'
            />
      </div>
      </Container>
    )
}
      