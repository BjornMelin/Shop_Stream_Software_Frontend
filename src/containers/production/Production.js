/* eslint-disable no-script-url */
import React from 'react';
import MainAppBar from '../AppBar/MainAppBar'
import ProductionCardButtons from '../Buttons/ProductionCardButtons'


import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';


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


export default function Production() {
    const classes = useStyles();

    return (
    <div>
        <MainAppBar>
        </MainAppBar>

        <ProductionCardButtons>

        </ProductionCardButtons>

    </div>
    );
}