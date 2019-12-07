/**
 * Inspection Add Form.
 * Form which allows a user to enter input and submit a 
 * new inspection.
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



/**
 * Submit Inspection Functional Component.
 * Called on from the InspectionSubmit.js page to submit a new inspection
 */
export default function InspectionSubmitForm() {
  const classes = useStyles();

  /**
   * Const which stores all values of inspection variables.
   * Values of vars update as a user enters input into the form
   */
  const values = {
    inspectDate: "",
    inspectDueDate: "",
    inspectDesc: "",
    jobNum: "",
    quantToShip: "",
    checkedQualGood: "",
    checkedQualOkay: "",
    checkedQualPoor: "",

  };

  /**
   * Handles what occurs when a user enters text into each text box
   * in the form.  This function changes the corresponding inspection
   * value to the value entered by the user.
   * @param {event} e denotes an event, a user entering text
   */
  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  /**
   * Function which handles submission of the form sending a 
   * POST request with the forms contents to the app API.
   * 
   * Note: In the future we need to configure this so it sends 
   * a response to the user if a new inspection already exists in the DB
   * or there is an error in submitting the inspection.
   * @param {event} e denotes an event, a submission of the form
   */
  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values)); // print inspection data to the screen
    /**
     * POST request to the App API which adds a new inspection according to the 
     * users input into the text fields.
     */
    superagent.post('http://127.0.0.1:4000/api/postInspectData')
      .send({ inspectDate: values.inspectDate, inspectDueDate: values.inspectDueDate,
              inspectDesc: values.inspectDesc, jobNum: values.jobNum,
              quantToShip: values.quantToShip, 
              checkedQualGood: values.checkedQualGood,
              checkedQualOkay: values.checkedQualOkay,
              checkedQualPoor: values.checkedQualPoor }) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  /**
   * Returns a form which allows a user to submit a new 
   * inspection in the DB.  This is what is returned when this
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
          Submit New Inspection
        </Typography>

        {/* Form for submitting a new inspection */}
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            {/* Inspection Date text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="inspectDate"
                variant="outlined"
                type="date"
                required
                fullWidth
                id="inspectDate"
                label="Inspection Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Inspection Due Date text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="inspectDueDate"
                variant="outlined"
                type="date"
                required
                fullWidth
                id="inspectDueDate"
                label="Inspection Due Date"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Inspection Description text field */}
            <Grid item xs={12} sm={24}>
              <TextField
                onChange={handleChange}
                name="inspectDesc"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax="4"
                id="inspectDesc"
                label="Inspection Description"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Job Number of inspection text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="jobNum"
                variant="outlined"
                required
                fullWidth
                id="jobNum"
                label="Inspection Job Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Quantity To Ship text field */}
            <Grid item xs={12} sm={3}>
              <TextField
                onChange={handleChange}
                name="quantToShip"
                variant="outlined"
                required
                fullWidth
                id="quantToShip"
                label="Quantity To Ship"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Material Condition checkbox titles */}
            <Grid item xs={12} sm={1} alignContent="flex-start">
            <Typography >
            <Box textAlign="left" fontSize={14}>
                Material
            </Box>
            </Typography>
            <Typography >
            <Box textAlign="left" fontSize={14}>
                Conditions:
            </Box>
            </Typography>
            </Grid>

            {/* Good Condition checkbox */}
            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    onChange={handleChange}
                    value="checkedQualGood"
                    color="primary"
                />
                }
                name="checkedQualGood"
                fullWidth
                id="checkedQualGood"
                label="Good"
                />
            </Grid>

            {/* Okay Condition checkbox */}
            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                    <Checkbox
                    onChange={handleChange}
                    value="checkedQualOkay"
                    color="primary"
                    />
                    }
                    name="checkedQualOkay"
                    fullWidth
                    id="checkedQualOkay"
                    label="Okay"
            />
            </Grid>

            {/* Poor Condition checkbox */}
            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                    <Checkbox
                    onChange={handleChange}
                    value="checkedQualPoor"
                    color="primary"
                    />
                    }
                    name="checkedQualPoor"
                    fullWidth
                    id="checkedQualPoor"
                    label="Poor"
            />
            </Grid>
          </Grid>

          {/* Submit button for form which creates a new Inspection onSubmit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="submitOrder"
          >
            Submit Inspection
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

