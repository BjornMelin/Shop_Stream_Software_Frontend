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





export default function InspectionSubmitForm() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedQualGood: false,
    checkedQualOkay: false,
    checkedQualPoor: false,
  });

 
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };


  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Submit New Inspection
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={() => {alert("submitted");}}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="inspectDate"
                variant="outlined"
                type="datetime-local"
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
            <Grid item xs={12} sm={6}>
              <TextField
                name="inspectDueDate"
                variant="outlined"
                type="datetime-local"
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
            <Grid item xs={12} sm={24}>
              <TextField
                name="inspectDosc"
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


            <Grid item xs={12} sm={3}>
              <TextField
                name="inspectJobNum"
                variant="outlined"
                required
                fullWidth
                id="inspectJobNum"
                label="Inspection Job Number"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>


            {/* Row 2 Of Form Input */}
            <Grid item xs={12} sm={3}>
              <TextField
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



            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    checked={state.checkedMaterial}
                    onChange={handleChange('checkedQualGood')}
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


            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                    <Checkbox
                    checked={state.checkedMaterial}
                    onChange={handleChange('checkedQualOkay')}
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

            <Grid item xs={12} sm={1} alignContent="flex-start">
            <FormControlLabel
                control={
                    <Checkbox
                    checked={state.checkedMaterial}
                    onChange={handleChange('checkedQualPoor')}
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

