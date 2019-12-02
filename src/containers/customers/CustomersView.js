/* eslint-disable no-script-url */
import React from 'react';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from '../AppBar/MenuDropdown'
import superagent from 'superagent';
import CustomersGet from './CustomersGet'



const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundHeight:'100%',
        backgroundWidth:"100%",
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image})`,
        backgroundPosition: "top",
        
      },
    },
}));


export default function CustomersView() {

// export default async function CustomersView() {

    const classes = useStyles();

    // const result = await superagent.get('http://127.0.0.1:4000/api/getData');
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
  

    return (
    <div className={classes.root}>
        <MenuDropdown />
        {/* <CustomersGet /> */}
    </div>
    );
}