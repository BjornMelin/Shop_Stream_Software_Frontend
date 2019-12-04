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






export default function JobsGet() {

    const classes = useStyles();

    const values = {
      jobs: []
    }

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


    
    async function getJobData() {

        const result = await superagent.get('http://127.0.0.1:4000/api/getJobs');

        const data = JSON.parse(result.text);
        var i;
        for (i = 0; i < data.length; i++)
        {
          delete(data[i]._id);
          delete(data[i].__v);
          values.jobs.push((data[i]));
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
            onClick={getJobData} 
            className="submit"
            > 
        Click Here Then Select Any Option In Grid To Load Jobs
        </Button>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={values.jobs}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      