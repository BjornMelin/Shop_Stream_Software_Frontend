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






export default function PartSetupGet() {

    const classes = useStyles();

    const values = {
      partSetups: []
    }

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


    
    async function getPartSetupsData() {

        const result = await superagent.get('http://127.0.0.1:4000/api/getPartSetups');

        const data = JSON.parse(result.text);
        var i;
        for (i = 0; i < data.length; i++)
        {
          delete(data[i]._id);
          delete(data[i].__v);
          values.partSetups.push((data[i]));
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
            onClick={getPartSetupsData} 
            className="submit"
            > 
        Click Here Then Select Any Option In Grid To Load Part Setups
        </Button>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={values.partSetups}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      