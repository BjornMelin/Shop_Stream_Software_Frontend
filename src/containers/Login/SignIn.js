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

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);



  function handleEmailChange(event) {
    setemail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    alert("SUCCESS: " + JSON.stringify({email, password}));
    console.log('hit');
    return API.get('http://127.0.0.1:9000/api/authenticate', {
      params: {
        email: email,
        password: password
      },
      timeout: 20000000
    }).then(function(response) {
      alert(console.log(response));
      return;
    }).catch(function(error) {
      console.error(error);
    });
    // console.log(token)
    // return '/dashboard'
    // if () {
    //   return '/dashboard';
    // }
  }




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={Image1} style={{ width: "250px" }} />
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={handleEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          />
          <Button
            // onSubmit={handleSubmit}
            type="submit"
            fullWidth
            id="signin"
            variant="contained"
            color="primary"
            className={classes.submit}
            // href='/dashboard'
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" >
                {"Don't have an account? Sign Up"}
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






  // const values = {
  //   email: "",
  //   password: ""
  // };

  // function handleChange(e) {
  //   const { id, value } = e.target;
  //   values[id] = value;
  // };


// function handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   fetch('http://127.0.0.1:9000/api/putData', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     }),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   console.log("here");
  //   // fetch('http://127.0.0.1:9000/api/putData', {
  //   //   method: 'POST',
  //   //   body: data,
  //   // });
  // }




  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert("SUCCESS: " + JSON.stringify(values));
  //   fetch('http://127.0.0.1:9000/api/putData', {
  //     method: 'POST',
  //     body: JSON.stringify(values),
  //   });
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert("SUCCESS: " + JSON.stringify(values));

  //   superagent.get('http://127.0.0.1:9000/api/getUserData')
  //   .query({ email: values.email, password: values.password }) // query string
  //   // .use(prefix) // Prefixes *only* this request
  //   // .use(nocache) // Prevents caching of *only* this request
  //   .end((err, res) => {
  //     // Do something
  //   });
  // };


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert("SUCCESS: " + JSON.stringify(values));
  //   // console.log(values);
  //   superagent.post('http://127.0.0.1:9000/api/putData')
  //     .send({ email: values.email, password: values.password, 
  //             permission: values.permission, firstName: values.firstName, 
  //             lastName: values.lastName, email: values.email }) // sends a JSON post body
  //     .set('accept', 'json')
  //     .end((err, res) => {
  //       // Calling the end function will send the request
  //   });
  // };