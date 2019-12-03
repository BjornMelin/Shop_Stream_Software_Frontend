/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import CustomersGet from './CustomersGet'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundHeight:'100%',
      backgroundWidth:"100%",
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${Image})`,
      backgroundPosition: "top",
      
    },
  },
  paper: {
    marginTop: theme.spacing(18),
    marginLeft: theme.spacing(28),
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
  },
}));


export default function CustomersView() {

// export default async function CustomersView() {

    const classes = useStyles();

    // const result = await superagent.get('http://127.0.0.1:4000/api/getData');
    /*
    .send({}) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
      // Calling the end function will send the request
      alert("SUCCESS: " + JSON.stringify(res));
  });
  */
//  alert("SUCCESS: " + JSON.stringify(result));
//   console.log(result);
  

    return (
    <div className={classes.root}>
        <MenuDropdown />

        <Grid item xs={24} >
          <Paper className={classes.paper}>
            <CustomersGet />
          </Paper>
        </Grid>    
    </div>
    );
}