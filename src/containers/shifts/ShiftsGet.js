/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import superagent from 'superagent';
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






export default function ShiftsGet() {

    const classes = useStyles();

    const [shifts, setShifts] = useState([]);

    const columns = [
      new ColumnModel('jobNum'),
      new ColumnModel('buttonToButtonTime'),
      new ColumnModel('partsSampled'),
      new ColumnModel('orderDate'),
      new ColumnModel('shiftNotes')
    ];


    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getShifts')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).shifts;
          var shiftsArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            shiftsArray.push((data[i]));
          }
          setShifts(shiftsArray);
        });
    }, [])
    


    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={shifts}
            gridName='Shifts List'
            />
      </div>
      </Container>
    )
}
      