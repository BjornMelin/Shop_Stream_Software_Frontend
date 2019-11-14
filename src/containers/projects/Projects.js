/* eslint-disable no-script-url */
import React from 'react';
import MenuDropdown from '../AppBar/MenuDropdown'
import Image from '../images/bill-oxford--fGqsewtsJY-unsplash.png'; 
import { makeStyles } from '@material-ui/core/styles';
import ProjectsCardButtons from '../Buttons/ProjectsCardButtons'


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

export default function Projects() {
    const classes = useStyles();

    return (
    <div>
        <MenuDropdown />

        <ProjectsCardButtons>

        </ProjectsCardButtons>

    </div>
    );
}