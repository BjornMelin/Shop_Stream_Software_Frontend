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

  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values));
    // console.log(values);
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
          onSubmit={handleSubmit}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
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
                // onChange="event.target.value"
              />
            </Grid>


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


            {/* Row 2 Of Form Input */}
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


            {/* Row 3 Of Form Input */}
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

