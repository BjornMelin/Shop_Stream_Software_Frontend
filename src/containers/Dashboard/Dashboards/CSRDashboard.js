/**
 * Customer Service Representative Dashboard Screen.
 */


/* eslint-disable no-script-url */
import React from 'react';
import Image from '../../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import CSRMenuDropdown from '../../AppBar/CSRMenuDropdown'



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
}));


export default function CSRDashboard() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <CSRMenuDropdown />
    </div>
    );
}