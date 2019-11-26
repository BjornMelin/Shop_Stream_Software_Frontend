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
}));





export default function CustomersAddForm() {
  const classes = useStyles();


  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }


  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add A New Customer
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
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

            <Grid item xs={12} sm={4}>
              <TextField
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




          </Grid>
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

