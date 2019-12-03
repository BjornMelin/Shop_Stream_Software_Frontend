/* eslint-disable no-script-url */
import React, { useState } from 'react';
// import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
// import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactJson from 'react-json-view'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // dataGrid: {
  //   paddingTop: theme.spacing(1),
  //   paddingLeft: theme.spacing(1),
  //   paddingRight: theme.spacing(1),
  //   paddingBottom: theme.spacing(1),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   width: '100%',
  //   alignItems: 'center',
  //   backgroundColor: theme.palette.common.white,
  // },
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






export default function CustomersView() {

    const classes = useStyles();

    // const [customers, setCustomers] = useState([null]);
    const values = {
      customers: []
    }

    const columns = [
      new ColumnModel('nameFirst'),
      new ColumnModel('nameLast'),
      new ColumnModel('companyName'),
      new ColumnModel('email'),
      new ColumnModel('phoneNum')
    ];


    
    async function getCustData() {

        const result = await superagent.get('http://127.0.0.1:4000/api/getData');
        // alert("SUCCESS: " + (JSON.parse(result.text)));

        const data = JSON.parse(result.text);
        var i;
        for (i = 0; i < data.length; i++)
        {
          delete(data[i]._id);
          delete(data[i].__v);
          values.customers.push((data[i]));
        }
        // var allCustomers = [];
        // allCustomers.push(JSON.stringify(result.body));
        // alert("Here: " + allCustomers);
        // const customersAll = 
        // values.customers.push(JSON.stringify(result.body));
        // alert("Customers: " + customersAll);
        // alert("Customers: " + values.customers);
    }


    return (
      <Container component="main" maxWidth="s">

      <CssBaseline />
      <div className={classes.paper}>
        <Button            
            variant="outlined"
            color="primary"
            onClick={getCustData} 
            > 
        Click Here Then Select Any Option In Grid To Load Customers
        </Button>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={values.customers}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      