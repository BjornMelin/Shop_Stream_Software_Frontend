/**
 * GET Part Setups DataGrid Component
 * Generates and displays a table containing a list of 
 * all part setups in the app database
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
 * GET Part Setups Page Functional Component.
 */
export default function PartSetupGet() {
    const classes = useStyles();


    /**
     * Const - an array to contain all part setups in the
     * app database
     */
    const [partSetups, setPartSetups] = useState([]);


    /**
     * Column names and formats for the DataGrid of part setups
     */
    const columns = [
      new ColumnModel('buttonToButtonTime'),
      new ColumnModel('partDesc'),
      new ColumnModel('machineTime'),
      new ColumnModel('toolNotes'),
      new ColumnModel('viceNotes'),
      new ColumnModel('Scrap'),
      new ColumnModel('scrapQuant'),
      new ColumnModel('scrapTypes')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all part setups within the database.  The function
     * parses out the returned JSON files and stores each part setup
     * as a seperate part setup object in an array
     */
    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getPartSetups')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).partSetups;
          var partSetupsArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            partSetupsArray.push((data[i]));
          }
          setPartSetups(partSetupsArray);
        });
    }, [])


    /**
     * Returns the GET Part Setups DataGrid.
     * Includes a DataGrid consisting of a list of all part setups
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />

      {/* DataGrid table consisting of all part setups from the app database */}
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={partSetups}
            gridName='Part Setups List'
            />
      </div>
      </Container>
    )
}
      