/* eslint-disable no-script-url */
import React from 'react';
import MainAppBar from '../AppBar/MainAppBar';
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import OrdersCardButtons from '../Buttons/OrdersCardButtons'
import MenuDropdown from '../AppBar/MenuDropdown'



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



export default function Orders() {
    const classes = useStyles();

    return (
    <div>
        <MenuDropdown>
          <div>

            <OrdersCardButtons>

            </OrdersCardButtons>

          </div>
        </MenuDropdown>



        {/* <OrdersButtons>

        </OrdersButtons> */}
    </div>
    );
}