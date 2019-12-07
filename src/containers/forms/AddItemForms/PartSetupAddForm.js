/**
 * Add Part Setup Form.
 * Form which allows a user to enter input and
 * add a new part setup to the DB.
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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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





export default function PartSetupAddForm() {
  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   checkedScrap: false,
  // });

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };


  const values = {
    buttonToButtonTime: "",
    partDesc: "",
    machineTime: "",
    toolNotes: "",
    viceNotes: "",
    Scrap: "",
    scrapQuant: "",
    scrapTypes: "",
  };

  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values));
    // console.log(values);
    superagent.post('http://127.0.0.1:4000/api/postPartSetupData')
      .send({ buttonToButtonTime: values.buttonToButtonTime,
              partDesc: values.partDesc, machineTime: values.machineTime,
              toolNotes: values.toolNotes, viceNotes: values.viceNotes,
              Scrap: values.Scrap, scrapQuant: values.scrapQuant,
              scrapTypes: values.scrapTypes}) // sends a JSON post body
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
          Add A Part Setup
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
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
                name="partDesc"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="partDesc"
                label="Part Description"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="machineTime"
                variant="outlined"
                required
                fullWidth
                id="machineTime"
                label="Machine Time"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="toolNotes"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="toolNotes"
                label="Tool Notes"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="viceNotes"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="viceNotes"
                label="Vice Notes"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>


            <Grid item xs={12} sm={3} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedMaterial}
                    onChange={handleChange}
                    value="checkedScrap"
                    color="primary"
                />
                }
                name="checkedScrap"
                fullWidth
                id="checkedScrap"
                label="Scrap"
            />
            </Grid>


            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="scrapQuant"
                variant="outlined"
                fullWidth
                id="scrapQuant"
                label="Scrap Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="scrapTypes"
                variant="outlined"
                fullWidth
                id="scrapTypes"
                label="Scrap Types"
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
            id="submitPartSetup"
          >
            Submit New Part Setup
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

