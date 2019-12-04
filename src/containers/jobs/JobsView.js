/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown';
import JobsGet from './JobsGet';



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


export default function JobsView() {
    const classes = useStyles();

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