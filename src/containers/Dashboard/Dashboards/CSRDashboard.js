/**
 * Customer Service Representative Dashboard Screen.
 */
/* eslint-disable no-script-url */
import React, { useEffect } from 'react';
import Image from '../../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import CSRMenuDropdown from '../../AppBar/CSRMenuDropdown'
const API = require('axios');


/**
 * Styles and formatting for this pages components
 */
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



/**
 * Main Customer Service Representative Dashboard Page Functional Component
 */
export default function CSRDashboard() {
    const classes = useStyles();


    /**
     * This function makes it so that a user must have an access token
     * in order for this screen to display.  The route/page will not display
     * unless a user is logged in and authenticated.
     */
    useEffect(() => {
      //  GET call to the auth API which checks for a users session token
      API.get('http://127.0.0.1:9000/api/authenticate', {
        headers: {
          token: window.sessionStorage.getItem('token')
        }
      }).then(function(response) {
        if (!response.data.success) {
          document.location.href = '/';
        }
        return;
      }).catch(function(error) {
        document.location.href = '/';
        console.error(error);
      });
    }, []);

    
    /**
     * Returns the main Customer Service Representative dashboard screen.
     * Includes the main CSR AppBar and Dashboard Panels
     */
    return (
    <div className={classes.root}>
        <CSRMenuDropdown />
    </div>
    );
}