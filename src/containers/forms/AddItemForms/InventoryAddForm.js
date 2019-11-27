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





export default function InventoryAddForm() {
  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   checkedMaterial: false,
  //   checkedTool: false,
  // });

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

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

  function handleChange(e) {
    const { id, value } = e.target;
    values[id] = value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCCESS: " + JSON.stringify(values));
    // console.log(values);
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


  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Material Or Tool
        </Typography>
        <form className={classes.form} 
          noValidate 
          onSubmit={handleSubmit}>

          {/* Row 1 Of Form Input */}
          <Grid container spacing={2}>
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



            <Grid item xs={12} sm={3} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedMaterial}
                    // onChange={handleChange('checkedMaterial')}
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
            <Grid item xs={12} sm={3} alignContent="flex-start">
            <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedTool}
                    // onChange={handleChange('checkedTool')}
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


            {/* Row 2 Of Form Input */}
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


            {/* Add MME Notes Section at the bottom */}


          </Grid>
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

