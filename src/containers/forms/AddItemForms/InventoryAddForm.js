/**
 * Add New Inventory Form.
 * Form which allows a user to enter input and
 * add new inventory items.
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
import InputAdornment from '@material-ui/core/InputAdornment';
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
 * Add New Inventory Functional Component.
 * Called on from the InventoryAdd.js page to add new inventory.
 */
export default function InventoryAddForm() {
  const classes = useStyles();

  /**
   * Const which stores all values of inventory variables.
   * Values of vars update as a user enters input into the form
   */
  const values = {
    materialName: "",
    materialType: "",
    checkedMaterial: "",
    checkedTool: "",
    matQuantity: "",
    amtPerItem: "",
    itemLenFeet: "",
    itemLenInch: "",
    itemWidthFeet: "",
    itemWidthInch: "",
    itemHtFeet: "",
    itemHtInch: "",
    mmeNotes: "",
  };

  /**
   * Handles what occurs when a user enters text into each text box
   * in the form.  This function changes the corresponding inventory
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
   * @param {event} e denotes an event, a submission of the form
   */
  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values)); // print inv data to the screen
    /**
     * POST request to the App API which adds new inventory according to the 
     * users input into the text fields.
     */
    superagent.post('http://127.0.0.1:4000/api/postInvMaterialData')
      .send({ materialName: values.materialName, materialType: values.materialType,
              checkedMaterial: values.checkedMaterial,
              checkedTool: values.checkedTool, matQuantity: values.matQuantity,
              amtPerItem: values.amtPerItem, itemLenFeet: values.itemLenFeet,
              itemLenInch: values.itemLenInch, itemWidthFeet: values.itemWidthFeet,
              itemWidthInch: values.itemWidthInch, itemHtFeet: values.itemHtFeet,
              itemHtInch: values.itemHtInch, mmeNotes: values.mmeNotes }) // sends a JSON post body
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
    });
  };


  /**
   * Returns a form which allows a user to add new inventory
   * in the DB.  This is what is returned when this
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
          Add New Material Or Tool
        </Typography>

        {/* Form for adding new inventory */}
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            {/* Material Name text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="materialName"
                variant="outlined"
                required
                fullWidth
                id="materialName"
                label="Material/Tool Name"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Material Type text field */}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                name="materialType"
                variant="outlined"
                required
                fullWidth
                id="materialType"
                label="Material/Tool Type"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Is A Material checkbox */}
            <Grid item xs={12} sm={3} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    onChange={handleChange}
                    value="checkedMaterial"
                    color="primary"
                />
                }
                name="checkedMaterial"
                fullWidth
                id="checkedMaterial"
                label="Material"
            />
            </Grid>

            {/* Is A Tool checkbox */}
            <Grid item xs={12} sm={3} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    onChange={handleChange}
                    value="checkedTool"
                    color="primary"
                />
                }
                name="checkedTool"
                fullWidth
                id="checkedTool"
                label="Tool"
            />
            </Grid>

            {/* Material Quantity text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="matQuantity"
                variant="outlined"
                required
                fullWidth
                id="matQuantity"
                label="Quantity"
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Amount Per Item ($) text field */}
            <Grid item xs={12} sm={4}>
              <TextField
                onChange={handleChange}
                name="amtPerItem"
                variant="outlined"
                required
                fullWidth
                id="amtPerItem"
                label="Amount - Per Item"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Item Length (ft) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemLenFeet"
                variant="outlined"
                required
                fullWidth
                id="itemLenFeet"
                label="Item Length"
                InputProps={{
                    endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>

            {/* Item Length (in) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemLenInch"
                variant="outlined"
                required
                fullWidth
                id="itemLenInch"
                label="Item Length"
                InputProps={{
                    endAdornment: <InputAdornment position="end">in</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
                />
            </Grid>


            {/* Item Width (ft) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemWidthFeet"
                variant="outlined"
                required
                fullWidth
                id="itemWidthFeet"
                label="Item Width"
                InputProps={{
                    endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Item Width (in) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemWidthInch"
                variant="outlined"
                required
                fullWidth
                id="itemWidthInch"
                label="Item Width"
                InputProps={{
                    endAdornment: <InputAdornment position="end">in</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Item Height (ft) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemHtFeet"
                variant="outlined"
                required
                fullWidth
                id="itemHtFeet"
                label="Item Height"
                InputProps={{
                    endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* Item Height (in) text field */}
            <Grid item xs={12} sm={2}>
              <TextField
                onChange={handleChange}
                name="itemHtInch"
                variant="outlined"
                required
                fullWidth
                id="itemHtInch"
                label="Item Height"
                InputProps={{
                    endAdornment: <InputAdornment position="end">in</InputAdornment>,
                  }}
                InputLabelProps={{
                  shrink: true,
                }}
                autoFocus
              />
            </Grid>

            {/* MME Notes text field */}
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
          </Grid>

          {/* Submit button for form which creates a new Inventory item onSubmit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="submitMaterial"
          >
            Submit New Material or Tool
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

