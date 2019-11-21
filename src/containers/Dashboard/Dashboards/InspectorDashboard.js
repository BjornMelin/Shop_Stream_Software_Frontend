/**
 * Inspector Dashboard Screen.
 */


/* eslint-disable no-script-url */
import React from 'react';
import Image from '../../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import InspectorMenuDropdown from '../../AppBar/InspectorMenuDropdown'



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


export default function InspectorDashboard() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <InspectorMenuDropdown />
    </div>
    );
}