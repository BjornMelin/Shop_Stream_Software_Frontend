/**
 * Customer Add Form.
 * Form which allows a user to enter input and create a 
 * new customer.
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
 * Customer Form Functional Component.
 * Called on from the CustomersAdd.js page to create a new customer
 */
export default function CustomersAddForm() {
  const classes = useStyles();

  /**
   * Const which stores all values of customer variables.
   * Values of vars update as a user enters input into the form
   */
  const values = {
    nameFirst: "",
    nameLast: "",
    companyName: "",
    email: "",
    phoneNum: "",
  };


  /**
   * Handles what occurs when a user enters text into each text box
   * in the form.  This function changes the corresponding customer
   * value to the value entered by the user.
   * @param {event} e denotes an event, a user entering text
   */
  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };


  /**
   * Note: In the future we need to configure this so it sends 
   * a response to the user if a new customer already exists in the DB
   * or there is an error in adding the customer.
   * @param {event} e 
   */
  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values)); // print cust values to screen
    /**
     * POST request to the App API which creates a new customer according to the 
     * users input into the text fields.
     */
    superagent.post('http://127.0.0.1:4000/api/postCustData')
      .send({ nameFirst: values.nameFirst, nameLast: values.nameLast,
              companyName: values.companyName, email: values.email,
              phoneNum: values.phoneNum}) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  /**
   * Returns a form which allows a user to create a new 
   * customer in the DB.  This is what is returned when this
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
          Add A New Customer
        </Typography>

        {/* Form for creating a new customer */}
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            {/* First Name text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="nameFirst"
                variant="outlined"
                required
                fullWidth
                id="nameFirst"
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Last Name text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="nameLast"
                variant="outlined"
                required
                fullWidth
                id="nameLast"
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Company Name text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="companyName"
                variant="outlined"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Email text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="email"
                variant="outlined"
                type="email"
                required
                fullWidth
                id="email"
                label="Email"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Phone Number text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="phoneNum"
                variant="outlined"
                required
                fullWidth
                id="phoneNum"
                label="Phone Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
          </Grid>

          {/* Submit button for form which creates a new user onSubmit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="submitNewCust"
          >
            Add New Customer
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

