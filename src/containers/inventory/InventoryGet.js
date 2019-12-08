/**
 * GET Inventory DataGrid Component
 * Generates and displays a table containing a list of 
 * all inventory in the app database
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
 * GET Inventory Page Functional Component.
 */
export default function InventoryGet() {
    const classes = useStyles();

    /**
     * Const - an array to contain all inventory in the
     * app database
     */
    const [inventory, setInventory] = useState([]);


    /**
     * Column names and formats for the DataGrid of Inventory
     */
    const columns = [
      new ColumnModel('materialName'),
      new ColumnModel('materialType'),
      new ColumnModel('checkedMaterial'),
      new ColumnModel('checkedTool'),
      new ColumnModel('matQuantity'),
      new ColumnModel('amtPerItem'),
      new ColumnModel('itemLenFeet'),
      new ColumnModel('itemLenInch'),
      new ColumnModel('itemWidthFeet'),
      new ColumnModel('itemWidthInch'),
      new ColumnModel('itemHtFeet'),
      new ColumnModel('itemHtInch'),
      new ColumnModel('mmeNotes')
    ];


    /**
     * Function which sends a GET request to the app database
     * and returns all inventory within the database.  The function
     * parses out the returned JSON files and stores each inventory
     * entry as a seperate inventory object in an array
     */
    useEffect(() => {
      superagent.get('http://127.0.0.1:4000/api/getInventory')
        .then((result) => {
          console.log(result.text);
          const data = JSON.parse(result.text).inventory;
          var inventoryArray = [];
          console.log(data);
          for (var i = 0; i < data.length; i++)
          {
            delete(data[i]._id);
            delete(data[i].__v);
            inventoryArray.push((data[i]));
          }
          setInventory(inventoryArray);
        });
    }, [])


    /**
     * Returns the GET Inventory DataGrid.
     * Includes a DataGrid consisting of a list of all Inventory
     * in the app database in a table/list format.  Data is exportable
     * as a csv and also printable in table format.
     */
    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />
      
      {/* DataGrid table consisting of all inventory from the app database */}
      <div className={classes.paper}>
        <DataGrid 
            columns={columns}
            dataSource={inventory}
            gridName='Inventory List'
            />
      </div>
      </Container>
    )
}
      