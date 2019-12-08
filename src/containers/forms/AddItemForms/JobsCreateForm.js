/**
 * Create New Job Form.
 * Form which allows a user to enter input and
 * create a new job.
 */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import superagent from 'superagent';


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
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(12),
    marginLeft: theme.spacing(28),
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



/**
 * Create a new Job Functional Component.
 * Called on from the JobsCreate.js page to create a new Job.
 */
export default function JobsCreateForm() {
  const classes = useStyles();

  /**
   * Const which stores all values of job variables.
   * Values of vars update as a user enters input into the form
   */
  const values = {
    orderDate: "",
    dueDate: "",
    poNum: "",
    jobNum: "",
    partNum: "",
    orderQuant: "",
    recievedQuant: "",
    remainingQuant: "",
    cycleTime: "",
    runHours: "",
    runDays: "",
    amountTotal: "",
    amountPerHour: "",
    amountPerUnit: "",
    mmeNotes: "",
  };


  /**
   * Handles what occurs when a user enters text into each text box
   * in the form.  This function changes the corresponding job
   * value to the value entered by the user.
   * @param {event} e denotes an event, a user entering text
   */
  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  /**
   * Function which handles submission of the form sending a 
   * POST request with the forms contents to the app API.
   * @param {event} e denotes an event, a submission of the form
   */
  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values)); // print job data to the screen
    /**
     * POST request to the App API which adds a new job according to the 
     * users input into the text fields.
     */
    superagent.post('http://127.0.0.1:4000/api/postJobData')
      .send({ orderDate: values.orderDate, dueDate: values.dueDate, 
              poNum: values.poNum, jobNum: values.jobNum, partNum: values.partNum,
              orderQuant: values.orderQuant, recievedQuant: values.recievedQuant, 
              remainingQuant: values.remainingQuant, cycleTime: values.cycleTime, 
              runHours: values.runHours, runDays: values.runDays, 
              amountTotal: values.amountTotal, amountPerHour: values.amountPerHour, 
              amountPerUnit: values.amountPerUnit, mmeNotes: values.mmeNotes }) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  /**
   * Returns a form which allows a user to add new job
   * in the DB.  This is what is returned when this
   * component is used in another component or class.
   */
  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>

        {/* On screen text denoting form title */}
        <Typography component="h1" variant="h5">
          Create A New Job
        </Typography>

        {/* Form for adding a new Job */}
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            {/* Order Date text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="orderDate"
                variant="outlined"
                type="date"
                required
                fullWidth
                id="orderDate"
                label="Order Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Due Date text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="dueDate"
                variant="outlined"
                type="date"
                required
                fullWidth
                id="dueDate"
                label="Due Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* PO Number text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="poNum"
                variant="outlined"
                required
                fullWidth
                id="poNum"
                label="P.O. Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Job Number text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="jobNum"
                variant="outlined"
                required
                fullWidth
                id="jobNum"
                label="Job Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Part Number text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="partNum"
                variant="outlined"
                required
                fullWidth
                id="partNum"
                label="Part Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Order Quantity text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="orderQuant"
                variant="outlined"
                required
                fullWidth
                id="orderQuant"
                label="Order Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Recieved Quantity text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="recievedQuant"
                variant="outlined"
                required
                fullWidth
                id="recievedQuant"
                label="Recieved Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Remaining Quantity text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="remainingQuant"
                variant="outlined"
                required
                fullWidth
                id="remainingQuant"
                label="Remaining Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Cycle Time text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="cycleTime"
                variant="outlined"
                required
                fullWidth
                id="cycleTime"
                label="Cycle Time"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Run Hours text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="runHours"
                variant="outlined"
                required
                fullWidth
                id="runHours"
                label="Run Hours"
                InputProps={{
                  endAdornment: <InputAdornment position="end">Hrs</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Run Days text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="runDays"
                variant="outlined"
                required
                fullWidth
                id="runDays"
                label="Run Days"
                InputProps={{
                  endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Amount Total ($) text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="amountTotal"
                variant="outlined"
                required
                fullWidth
                id="amountTotal"
                label="Amount - Total"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Amount Per Hour ($) text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="amountPerHour"
                variant="outlined"
                required
                fullWidth
                id="amountPerHour"
                label="Amount - Per Hour"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Amount Per Unit text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="amountPerUnit"
                variant="outlined"
                required
                fullWidth
                id="amountPerUnit"
                label="Amount - Per Unit"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* MME Notes text field */}
            <Grid item xs={12} sm={24}>
              <TextField
                onChange={handleChange}
                name="mmeNotes"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="mmeNotes"
                label="MME Notes"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
          </Grid>

          {/* Submit button for form which creates a new Job onSubmit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="submitOrder"
          >
            Submit Job
          </Button>
        </form>
      </div>

      {/* Displays the ShopStream Copyright */}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

