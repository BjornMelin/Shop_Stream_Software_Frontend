/* eslint-disable no-script-url */
import React, { useState } from 'react';
// import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
// import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import Button from '@material-ui/core/Button';
import CustTable from './CustTable';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ReactJson from 'react-json-view'




const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
});






export default function CustomersView() {

    const classes = useStyles();

    // const [customers, setCustomers] = useState([null]);
    const values = {
      customers: []
    }
    
    async function getCustData() {

        const result = await superagent.get('http://127.0.0.1:4000/api/getData');
        alert("SUCCESS: " + (JSON.parse(result.text)));

        const data = JSON.parse(result.text);
        var i;
        for (i = 0; i < data.length; i++)
        {
          values.customers.push((data[i]))
        }

        // var allCustomers = [];
        // allCustomers.push(JSON.stringify(result.body));
        // alert("Here: " + allCustomers);

        // const customersAll = 
        // values.customers.push(JSON.stringify(result.body));
       
        // alert("Customers: " + customersAll);
        // alert("Customers: " + values.customers);
        

    }


    return (
      <div marginTop={15}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Button onClick={getCustData}>
          View Customers
        </Button>
        <ReactJson src={values.customers} onEdit={true}/>
        </Grid>
      </Grid>
      </div>
    )
}
        // <div marginTop={15}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={12} sm={12} md={12}>
        //           {/* <Button color="primary" onClick={getCustData}>View Customers</Button> */}
        //           <Table {customers.map((data, i) =>  {
        //             return (

        //             )
        //           })}
                  // {/* <Card> */}
                    // {/* <CardHeader color="primary">
                      // <h4 className={classes.cardTitleWhite}>Customers List</h4>
                      // <p className={classes.cardCategoryWhite}>
                        // {/*Here is a subtitle for this table*/}
                      // {/* </p> */}
                    // {/* </CardHeader> */} 
                    // {/* <CardContent>
                      // <Table
                      //   tableHeaderColor="primary"
                      //   tableHead={["First Name", "Last Name", "Company Name",
                      //               "Email", "Phone Number"]}
                      //   tableData={result.body}
                      // />
                    // </CardContent> */}
                    // {/* <Card> */}
                      // {/* <Button color="primary">Update Customer</Button> */}
                    // {/* </Card> */}
                  // {/* </Card> */}
        //         </Grid>
        //       </Grid>
        // </div>
    // );
// }

        // <span>
        //     {this.state.result.map(function(object) {
        //       return (
        //         <li key={object.id} data={object} />
        //       );
        //     })}
        //     </span>



    /*
    .send({}) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
      // Calling the end function will send the request
      alert("SUCCESS: " + JSON.stringify(res));
  });
  */
//  alert("SUCCESS: " + JSON.stringify(result));
//   console.log(result);

//   return (
//     <span>
//     // This will go through all the elements in arrayFromJson and
//     // render each one as a <SomeComponent /> with data from the object
//     {this.state.arrayFromJson.map(function(object) {
//       return (
//         <TextView key={object.id} data={object} />
//       );
//     })}
//   </span>
//         // console.log(result)
    // );
