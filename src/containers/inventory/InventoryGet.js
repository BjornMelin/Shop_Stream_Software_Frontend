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






export default function InventoryGet() {

    const classes = useStyles();

    const [inventory, setInventory] = useState([]);


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


    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />
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
      