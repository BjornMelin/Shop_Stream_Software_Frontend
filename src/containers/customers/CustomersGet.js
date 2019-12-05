/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import superagent from 'superagent';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';




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






export default function CustomersGet() {

    const classes = useStyles();

    const [customers, setCustomers] = useState([]);


    const columns = [
      new ColumnModel('nameFirst'),
      new ColumnModel('nameLast'),
      new ColumnModel('companyName'),
      new ColumnModel('email'),
      new ColumnModel('phoneNum')
    ];



    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getCustomers')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).customers;
          var customerArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            customerArray.push((data[i]));
          }
          setCustomers(customerArray);
        });
    }, [])



    return (
      <Container component="main" maxWidth="s">

      <CssBaseline />
      <div className={classes.paper}>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={customers}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      