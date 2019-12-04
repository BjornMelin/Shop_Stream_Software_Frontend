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

// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';


import superagent from 'superagent';


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





export default function CustomersAddForm() {
  const classes = useStyles();


  const values = {
    username: "",
    password: "",
    permission: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values));
    // console.log(values);
    superagent.post('http://127.0.0.1:9000/api/postUser')
      .send({ username: values.username, password: values.password, 
              permission: values.permission, firstName: values.firstName, 
              lastName: values.lastName, email: values.email }) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create A New User Account
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}
          >

          
          <Grid container spacing={2}>
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
          <Button
            // onSubmit={handleSubmit}
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}





        /* <form
          onSubmit={handleSubmit}
        >
          <label>
            Email:
            <input type="text" name="email" id="email" onChange={handleChange}/>
          </label>
          <label>
            Password:
            <input type="text" name="password" id="password" onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form> */