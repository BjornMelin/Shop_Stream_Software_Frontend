/**
 * View Jobs Screen
 * Displays the JobsGet.js DataGrid containing a list 
 * of all jobs in the app database
 */
/* eslint-disable no-script-url */
import React, {useEffect} from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown';
import JobsGet from './JobsGet';
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
 * View Jobs Page Functional Component.
 */
export default function JobsView() {
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
     * Returns the View Jobs screen.
     * Includes the main AppBar & JobsGET DataGrid 
     * listing all jobs in the database
     */
    return (
    <div className={classes.root}>
        <MenuDropdown />
        <JobsGet />
    </div>
    );
}












// export default function JobsView() {
//     const classes = useStyles();

//     return (
//     <div >
//         <MenuDropdown className={classes.root}/>
//         <Grid item xs={12} >
//           <Paper className={classes.paper}>
//             <JobsGlimpse />
//           </Paper>
//         </Grid>    
//     </div>

//     );
// }