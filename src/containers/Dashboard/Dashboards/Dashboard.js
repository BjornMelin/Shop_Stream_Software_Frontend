/**
 * Admin Dashboard Screen.
 * This dashboard is also used by those with 'Manager' permission
 */


/* eslint-disable no-script-url */
import React from 'react';
import Image from '../../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../../AppBar/MenuDropdown'
import DashboardPanels from '../DashboardItems/DashboardPanels';



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


export default function Dashboard() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <MenuDropdown />
        <DashboardPanels />
    </div>
    );
}