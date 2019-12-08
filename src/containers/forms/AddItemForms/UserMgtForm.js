/**
 * Admin Add User Form.
 * Form which allows an Admin to enter input and add a new user to the DB.
 * Right now this form is available to all users but in the near future 
 * we'd like to setup permissions and display our various dashboards accordingly.
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
  formControl: {
    width: "100%",
  },
}));



/**
 * Create a new User Functional Component.
 * Called on from the CreateUser.js page to create a new User.
 */
export default function CustomersAddForm() {
  const classes = useStyles();

  /**
   * Const which stores all values of new User variables.
   * Values of vars update as an admin enters input into the form
   */
  const values = {
    username: "",
    password: "",
    permission: "",
    firstName: "",
    lastName: "",
    email: ""
  };


  /**
   * Handles what occurs when an andmin enters text into each text box
   * in the form.  This function changes the corresponding new User
   * value to the value entered by the admin.
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
    alert("SUCCESS: " + JSON.stringify(values)); // print part setup data to the screen
    /**
     * POST request to the App API which adds a new User according to the 
     * admins input into the text fields.
     */
    superagent.post('http://127.0.0.1:9000/api/postUser')
      .send({ username: values.username, password: values.password, 
              permission: values.permission, firstName: values.firstName, 
              lastName: values.lastName, email: values.email }) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  /**
   * Returns a form which allows an admin to add a new User
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
          Create A New User Account
        </Typography>

        {/* Form for adding a new User */}
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}
          >
          <Grid container spacing={2}>

            {/* Username text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Password text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid> 

            {/* Permission Name selector - to be implemented */}
            {/* <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl} >
              <InputLabel id="permissionName" >Select Permission</InputLabel>
                <Select
                  labelId="permissionName"
                  id="permission"
                  // label="Permission"
                  name="permission"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoFocus
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="inspector">Inspector</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="csr">CSR</MenuItem>
                  <MenuItem value="operator">Operator</MenuItem>
                </Select>
                </FormControl>
              </Grid> */}

            {/* Permission text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="permission"
                variant="outlined"
                required
                fullWidth
                id="permission"
                label="Permission"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid> 

            {/* First Name of new user text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid> 

            {/* Last Name of new user text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid> 

            {/* Email of new user text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="email"
                variant="outlined"
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
          </Grid>

          {/* Submit button for form which creates a new User onSubmit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="submitNewCust"
          >
            Create User
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