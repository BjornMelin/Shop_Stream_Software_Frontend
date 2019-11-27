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





export default function ShiftsAddForm() {
  const classes = useStyles();


  const values = {
    jobNum: "",
    buttonToButtonTime: "",
    partsSampled: "",
    orderDate: "",
    shiftNotes: "",
  };

  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values));
    // console.log(values);
    superagent.post('http://127.0.0.1:4000/api/postShiftData')
      .send({ jobNum: values.jobNum, buttonToButtonTime: values.buttonToButtonTime,
              partsSampled: values.partsSampled, orderDate: values.orderDate,
              shiftNotes: values.shiftNotes }) // sends a JSON post body
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
            Add A Shift
          </Typography>
          <form className={classes.form} 
            noValidate 
            onSubmit={handleSubmit}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
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

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="buttonToButtonTime"
                variant="outlined"
                required
                fullWidth
                id="buttonToButtonTime"
                label="Button To Button Time"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="partsSampled"
                variant="outlined"
                required
                fullWidth
                id="partsSampled"
                label="Parts Sampled"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

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

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="shiftNotes"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="shiftNotes"
                label="Shift Notes"
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
            id="submitShifts"
          >
            Submit Shift
            </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
