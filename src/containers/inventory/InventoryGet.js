/* eslint-disable no-script-url */
import React from 'react';
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






export default function InventoryGet() {

    const classes = useStyles();

    const values = {
      inventory: []
    }

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


    
    async function getInvData() {

        const result = await superagent.get('http://127.0.0.1:4000/api/getInventory');

        const data = JSON.parse(result.text);
        var i;
        for (i = 0; i < data.length; i++)
        {
          delete(data[i]._id);
          delete(data[i].__v);
          values.inventory.push((data[i]));
        }
    }


    return (
      <Container component="main" maxWidth="s">

      <CssBaseline />
      <div className={classes.paper}>
        <Button     
            type="submit"      
            variant="outlined"
            color="inherit"
            onClick={getInvData} 
            className="submit"
            > 
        Click Here Then Select Any Option In Grid To Load Inventory
        </Button>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={values.inventory}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      