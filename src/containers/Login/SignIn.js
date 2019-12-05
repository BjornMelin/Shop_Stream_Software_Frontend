import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import Image1 from '../images/shop_stream_logo.png'; 
const API = require('axios');
// import superagent from 'superagent';



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





export default function SignIn() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);


  // const [email, setemail] = useState('');
  // const [password, setPassword] = useState('');
  // const [token, setToken] = useState(null);



  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }


  function handleSubmit(event) {
    return API.get('http://127.0.0.1:9000/api/authenticate', {
      params: {
        username: username,
        password: password
      }
    }).then(function(response) {
      if (response.data && response.data.token) {
        setToken(response.token);
        document.location.href = '/dashboard';
      } else {
        document.location.href = '/';
      }
      return;
    }).catch(function(error) {
      console.error(error);
    });
  }

  // function handleSubmit(event) {
  //   alert("SUCCESS: " + JSON.stringify({email, password}));
  //   console.log('hit');
  //   return API.get('http://127.0.0.1:9000/api/authenticate', {
  //     params: {
  //       email: email,
  //       password: password
  //     },
  //     timeout: 20000000
  //   }).then(function(response) {
  //     alert(console.log(response));
  //     return;
  //   }).catch(function(error) {
  //     console.error(error);
  //   });
  //   // console.log(token)
  //   // return '/dashboard'
  //   // if () {
  //   //   return '/dashboard';
  //   // }
  // }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img alt='' src={Image1} style={{ width: "250px" }} />
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            onChange={handleUsernameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            //type="email"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            id="rememberUserCheck"
          />
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
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
