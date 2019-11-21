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





export default function JobsCreateForm() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create A New Job
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={() => {alert("submitted");}}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="orderDateInput"
                variant="outlined"
                type="datetime-local"
                required
                fullWidth
                id="orderDateInput"
                label="Order Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="dueDateInput"
                variant="outlined"
                type="datetime-local"
                required
                fullWidth
                id="dueDateInput"
                label="Due Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="poNumInput"
                variant="outlined"
                required
                fullWidth
                id="poNumInput"
                label="P.O. Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                // onChange="event.target.value"
              />
            </Grid>


            <Grid item xs={12} sm={3}>
              <TextField
                name="jobNumInput"
                variant="outlined"
                required
                fullWidth
                id="jobNumInput"
                label="Job Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>


            {/* Row 2 Of Form Input */}
            <Grid item xs={12} sm={3}>
              <TextField
                name="partNumInput"
                variant="outlined"
                required
                fullWidth
                id="partNumInput"
                label="Part Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="orderQuantInput"
                variant="outlined"
                required
                fullWidth
                id="orderQuantInput"
                label="Order Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="recievedQuantInput"
                variant="outlined"
                required
                fullWidth
                id="recievedQuantInput"
                label="Recieved Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>


            {/* Row 3 Of Form Input */}
            <Grid item xs={12} sm={3}>
              <TextField
                name="remainingQuantInput"
                variant="outlined"
                required
                fullWidth
                id="remainingQuantInput"
                label="Remaining Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="cycleTimeInput"
                variant="outlined"
                required
                fullWidth
                id="cycleTimeInput"
                label="Cycle Time"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="runHoursInput"
                variant="outlined"
                required
                fullWidth
                id="runHoursInput"
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


            <Grid item xs={12} sm={3}>
              <TextField
                name="runDaysInput"
                variant="outlined"
                required
                fullWidth
                id="runDaysInput"
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
            <Grid item xs={12} sm={3}>
              <TextField
                name="amountTotalInput"
                variant="outlined"
                required
                fullWidth
                id="amountTotalInput"
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
            <Grid item xs={12} sm={3}>
              <TextField
                name="amountPerHourInput"
                variant="outlined"
                required
                fullWidth
                id="amountPerHourInput"
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
            <Grid item xs={12} sm={3}>
              <TextField
                name="amountPerUnitInput"
                variant="outlined"
                required
                fullWidth
                id="amountPerUnitInput"
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

            {/* Add MME Notes Section at the bottom */}


          </Grid>
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

