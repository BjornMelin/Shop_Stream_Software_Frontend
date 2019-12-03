/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import Button from '@material-ui/core/Button';



async function getCustData() {
    const values = {
        customers: [],
    };

    const result = await superagent.get('http://127.0.0.1:4000/api/getData');
    alert("SUCCESS: " + JSON.stringify(result.body));

    values.customers.push(result.body);
    alert(JSON.stringify(values.customers));


    // const finalRes = values.customers.map(function(customers) {
    //     return (
    //         <li key={customers.id} data={customers} />
    //     );
    // });
    // alert(finalRes);
}




// export default async function CustomersView() {
export default function CustomersView() {

    // const classes = useStyles();

    // const result = await superagent.get('http://127.0.0.1:4000/api/getData');
    // alert("SUCCESS: " + JSON.stringify(result));




    return (
        <div marginTop={15}>
            <Button onClick={getCustData}>
                Click To View Customers
            </Button>

        </div>
        

        // <span>
        //     {this.state.result.map(function(object) {
        //       return (
        //         <li key={object.id} data={object} />
        //       );
        //     })}
        //     </span>
    );

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
}