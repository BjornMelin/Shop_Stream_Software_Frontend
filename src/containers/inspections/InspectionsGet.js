/* eslint-disable no-script-url */
import React, {useEffect, useState} from 'react';
// import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
// import MenuDropdown from '../AppBar/MenuDropdown'
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






export default function InspectionsGet() {

    const classes = useStyles();

    const [inspections, setInspections] = useState([]);


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


    return (
      <Container component="main" maxWidth="s">
      <CssBaseline />
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
      