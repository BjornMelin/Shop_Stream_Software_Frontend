/* eslint-disable no-script-url */
import React from 'react';
// import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
// import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from 'tubular-react';
import { ColumnModel } from 'tubular-common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
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
}));






export default function CustomersDelete() {

    const classes = useStyles();
    // const theme = useTheme();

    // const [customers, setCustomers] = useState([null]);
    const values = {
      customers: []
    }

    const columns = [
      new ColumnModel('nameFirst'),
      new ColumnModel('nameLast'),
      new ColumnModel('companyName'),
      new ColumnModel('email'),
      new ColumnModel('phoneNum'),
      new ColumnModel(<Button>Edit</Button>),
      new ColumnModel(<Button>Delete</Button>)
    ];


    
    function deleteCustData() {

        superagent.get('http://127.0.0.1:4000/api/deleteCustomers');
        // alert("SUCCESS: " + (JSON.parse(result.text)));

        // const data = JSON.parse(result.text);
        // var i;
        // for (i = 0; i < data.length; i++)
        // {
        //   delete(data[i]._id);
        //   delete(data[i].__v);
        //   values.customers.push((data[i]));
        // }
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     superagent.post('http://127.0.0.1:4000/api/postCustData')
    //       .send({ nameFirst: values.nameFirst, nameLast: values.nameLast,
    //               companyName: values.companyName, email: values.email,
    //               phoneNum: values.phoneNum}) // sends a JSON post body
    //       .set('accept', 'json')
    //       .end((err, res) => {
    //         // Calling the end function will send the request
    //     });
    //   };


    return (
      <Container component="main" maxWidth="s">

      <CssBaseline />
      <div className={classes.paper}>
        <Button     
            type="submit"      
            variant="outlined"
            color="inherit"
            onClick={DeleteCustData} 
            className="submit"
            > 
        Click Here Then Select Any Option In Grid To Load Customers
        </Button>
      <Grid container >
        <DataGrid 
            columns={columns}
            dataSource={values.customers}
            gridName='Grid'
            />
      </Grid>
      </div>
      </Container>
    )
}
      