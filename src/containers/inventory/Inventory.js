/**
 * Inventory Screen
 * Displays inventory buttons for adding, viewing, and editing inventory.
 */
/* eslint-disable no-script-url */
import React, {useEffect} from 'react';
import MenuDropdown from '../AppBar/MenuDropdown';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import InventoryCardButtons from '../Buttons/InventoryCardButtons';
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
 * Inventory Page Functional Component.
 */
export default function Inventory() {
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
     * Returns the main Inventory screen.
     * Includes the main AppBar & Inventory Buttons
     */
    return (
    <div className={classes.root}>
        <MenuDropdown />
        <InventoryCardButtons />
    </div>
    );
}