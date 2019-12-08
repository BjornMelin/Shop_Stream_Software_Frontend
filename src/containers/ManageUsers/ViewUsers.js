/**
 * View Users Screen
 * Displays the GetUsers.js DataGrid containing a list 
 * of all users in the app database
 */
/* eslint-disable no-script-url */
import React, {useEffect} from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown';
import GetUsers from './GetUsers';
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



/**
 * View Users Page Functional Component.
 */
export default function ViewUsers() {
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
     * Returns the View Users screen.
     * Includes the main AppBar & GETUsers DataGrid 
     * listing all users in the database
     */
    return (
    <div className={classes.root}>
        <MenuDropdown /> 
        <GetUsers/>
    </div>
    );
}
