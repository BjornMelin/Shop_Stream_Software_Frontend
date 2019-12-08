/**
 * GET Inspections DataGrid Component
 * Generates and displays a table containing a list of 
 * all inspections in the app database
 */
/* eslint-disable no-script-url */
import React, {useEffect, useState} from 'react';
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
 * GET Inspections Page Functional Component.
 */
export default function InspectionsGet() {
    const classes = useStyles();

    /**
     * Const - an array to contain all inspections in the
     * app database
     */
    const [inspections, setInspections] = useState([]);


    /**
     * Column names and formats for the DataGrid of inspections
     */
    const columns = [
      new ColumnModel('inspectDate'),
      new ColumnModel('inspectDueDate'),
      new ColumnModel('inspectDesc'),
      new ColumnModel('jobNum'),
      new ColumnModel('quantToShip'),
      new ColumnModel('checkedQualGood'),
      new ColumnModel('checkedQualOkay'),
      new ColumnModel('checkedQualPoor')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all inspections within the database.  The function
     * parses out the returned JSON files and stores each inspection
     * as a seperate inspection object in an array
     */
    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getInspections')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).inspections;
          var inspectionsArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            inspectionsArray.push((data[i]));
          }
          setInspections(inspectionsArray);
        });
    }, [])


    /**
     * Returns the GET Inspections DataGrid.
     * Includes a DataGrid consisting of a list of all inspections
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all inspections from the app database */}
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={inspections}
            gridName='Grid'
            />
      </div>
      </Container>
    )
}
      