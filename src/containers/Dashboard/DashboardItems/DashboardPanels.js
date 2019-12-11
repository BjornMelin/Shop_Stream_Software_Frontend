/**
 * Includes all Dashboard Panels displayed on the main
 * Dashboard page.
 */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import JobsGlimpse from '../../jobs/JobsGlimpse';
import Typography from '@material-ui/core/Typography';
import Image1 from '../../images/shop_stream_logo.png'; 
import Theme from '../../../theme';


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
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  container: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


/**
 * Dashboard Panels Functional Component
 */
export default function DashboardPanels() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    /**
     * Returns a view of all dashboard panels and their contents
     */
    return(
        <div >
        <Container maxWidth="md" className={classes.container}>
        <img alt='' src={Image1} style={{ width: "350px" }} />
        <Paper className={fixedHeightPaper}>
          <Typography>
            Welcome to ShopStream!  
          </Typography>
          <Typography
            marginTop={2}>
            ShopStream is a job and workflow management system.  ShopStream provides a
             solution for handling job tracking and workflow, inventory management, 
            customer management, submitting and managing inspections, shifts, part setups,
            and application users.  ShopStream users are able to seamlessly add to, view, and edit 
            jobs, inventory, customers, inspections, shifts, partsetups, and users through ShopStreams 
            seven main pages.  All relevant data from ShopStream is stored in a local database,
            data within the applications database can be viewed and modified at any time through 
            the panels within each of the six main pages of ShopStream. 
          </Typography>
          </Paper>
          {/* <Grid container spacing={3}> */}
            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <JobsGlimpse />
              </Paper>
            </Grid>
          </Grid> */}
        </Container>
        <Copyright/>
      </div>
    )
};