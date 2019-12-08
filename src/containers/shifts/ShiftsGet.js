/**
 * GET Shifts DataGrid Component
 * Generates and displays a table containing a list of 
 * all shifts in the app database
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
 * GET Shifts Page Functional Component.
 */
export default function ShiftsGet() {
    const classes = useStyles();


    /**
     * Const - an array to contain all shifts in the
     * app database
     */
    const [shifts, setShifts] = useState([]);


    /**
     * Column names and formats for the DataGrid of Shifts
     */
    const columns = [
      new ColumnModel('jobNum'),
      new ColumnModel('buttonToButtonTime'),
      new ColumnModel('partsSampled'),
      new ColumnModel('orderDate'),
      new ColumnModel('shiftNotes')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all shifts within the database.  The function
     * parses out the returned JSON files and stores each shift
     * as a seperate shift object in an array
     */
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
    

    /**
     * Returns the GET Shifts DataGrid.
     * Includes a DataGrid consisting of a list of all shifts
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all shifts from the app database */}
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
      