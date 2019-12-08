/**
 * User Account Page
 * Displays information about a users account.
 */
/* eslint-disable no-script-url */
import React, {useEffect} from 'react';
import MenuDropdown from '../AppBar/MenuDropdown';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const API = require('axios');

/**
 * ShopStream Copyright 
 */
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          ShopStream
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
 * User Account Page Functional Component.
 */
export default function UserAccount() {
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
    * Returns the main menu & app bar for now, will be adding to this
    * page in the future.  This is what is returned when this
    * component is used in another component or class.
    */
    return (
        <Container component="main" maxWidth="s">
        <CssBaseline />
            <div className={classes.root}>
                <MenuDropdown />
            </div>
            
            {/* Displays the ShopStream Copyright */}
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}