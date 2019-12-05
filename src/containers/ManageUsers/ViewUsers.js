/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown';
import GetUsers from './GetUsers';



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


export default function ViewUsers() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <MenuDropdown /> 
        <GetUsers/>
    </div>
    );
}
