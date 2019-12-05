/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import superagent from 'superagent';
import Button from '@material-ui/core/Button';
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




export default function GetUsers() {

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    // const users = [];


    const columns = [
      new ColumnModel('username'),
      new ColumnModel('permission'),
      new ColumnModel('firstName'),
      new ColumnModel('lastName'),
      new ColumnModel('email')
    ];


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
          // console.log(users)
        });
    })


    
    // async function getUsersData() {

    //     const result = await superagent.get('http://127.0.0.1:9000/api/getUsers');

    //     const data = JSON.parse(result.text);
    //     var i;
    //     for (i = 0; i < data.length; i++)
    //     {
    //       delete(data[i]._id);
    //       delete(data[i].__v);
    //       values.users.push((data[i]));
    //     }
            // console.log(values)
    // }


    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <DataGrid
            columns={columns}
            dataSource={users}
            gridName='Grid'
            />
      </div>
      </Container>
    )
}
      
