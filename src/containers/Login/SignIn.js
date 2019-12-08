/**
 * Main SignIn Page for ShopStream Application.
 * Allows a user to sign in if their account is verified
 * and is in the user authentication database.
 */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import Image1 from '../images/shop_stream_logo.png'; 
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
      // backgroundColor: theme.palette.common.white,
      textAlign: 'center',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${Image})`,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




/**
 * User SignIn Functional Component
 */
export default function SignIn() {
  const classes = useStyles();

  /**
   * Const values which store the state of the users username
   * & password on the form
   */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  /**
   * Const which when called will set the username const state
   * to the username entered in by the user
   * @param {e} event denotes a user entered a username
   */
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }


  /**
   * Const which when called will set the password const state
   * to the password entered in by the user
   * @param {e} event denotes a user entered a password
   */
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }


  /**
   * This function signs a user into ShopStream upon submission
   * of the signin form if their credentials are valid.  A GET request
   * is sent to the Auth API to validate credentials then a token
   * is assigned for the users session.
   * @param {e} event denotes a user clicked the signin button
   */
  function handleSubmit(event) {
    /**
     * GET call to the auth API which assigns a user a token and 
     * authenticates their login information
     */
    return API.get('http://127.0.0.1:9000/api/signIn', {
      params: {
        username: username,
        password: password
      }
    }).then(function(response) {
      if (response.data && response.data.token) {
        window.sessionStorage.setItem('token', response.data.token);
        document.location.href = '/dashboard';
      } else {
        document.location.href = '/';
      }
      return;
    }).catch(function(error) {
      console.error(error);
    });
  }


  /**
   * Returns the SignIn page with the main signin form.
   */
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img alt='' src={Image1} style={{ width: "250px" }} />

        {/* On screen text denoting form title */}
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>

        {/* Form for Signing a user into ShopStream */}
        <form className={classes.form}>

          {/* Username text field */}
          <TextField
            onChange={handleUsernameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />

          {/* Password text field */}
          <TextField
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

          />

          {/* Remember Me checkbox */}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            id="rememberUserCheck"
          /> */}

          {/* Submit button for form which signs a user into Shopstream onSubmit */}
          <Button
            onClick={handleSubmit}
            fullWidth
            id="signin"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          {/* Forgot Password button */}
          {/* <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>

      {/* Displays the ShopStream Copyright */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
