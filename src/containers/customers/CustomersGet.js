/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';



export default async function CustomersView() {

    // const classes = useStyles();

    const result = await superagent.get('http://127.0.0.1:4000/api/getData');

    return (
        <span>
            {this.state.result.map(function(object) {
              return (
                <li key={object.id} data={object} />
              );
            })}
            </span>
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