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






export default function PartSetupGet() {

    const classes = useStyles();

    const [partSetups, setPartSetups] = useState([]);

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



    return (
      <Container component="main" maxWidth="s">

      <CssBaseline />
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
      