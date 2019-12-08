/**
 * GET Jobs DataGrid Component
 * Generates and displays a table containing a list of 
 * all jobs in the app database
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
 * GET Jobs Page Functional Component.
 */
export default function JobsGet() {
    const classes = useStyles();


    /**
     * Const - an array to contain all Jobs in the
     * app database
     */
    const [jobs, setJobs] = useState([]);


    /**
     * Column names and formats for the DataGrid of Jobs
     */
    const columns = [
      new ColumnModel('orderDate'),
      new ColumnModel('dueDate'),
      new ColumnModel('poNum'),
      new ColumnModel('jobNum'),
      new ColumnModel('partNum'),
      new ColumnModel('orderQuant'),
      new ColumnModel('recievedQuant'),
      new ColumnModel('remainingQuant'),
      new ColumnModel('cycleTime'),
      new ColumnModel('runHours'),
      new ColumnModel('runDays'),
      new ColumnModel('amountTotal'),
      new ColumnModel('amountPerHour'),
      new ColumnModel('amountPerUnit')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all jobs within the database.  The function
     * parses out the returned JSON files and stores each job
     * as a seperate job object in an array
     */
    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getJobs')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).jobs;
          var jobsArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            jobsArray.push((data[i]));
          }
          setJobs(jobsArray);
        });
    }, [])
    

    /**
     * Returns the GET Jobs DataGrid.
     * Includes a DataGrid consisting of a list of all jobs
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all jobs from the app database */}
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={jobs}
            gridName='Jobs List'
            />
      </div>
      </Container>
    )
}
      