import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Image from '../images/karan-bhatia-ib7jwp7m0iA-unsplash.jpg'
import Image1 from '../images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
import Image2 from '../images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      flexGrow: 1,
      paddingTop: theme.spacing(24),
      paddingLeft: theme.spacing(24),
    },
    image: {
      position: 'relative',
      height: 200,

      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
  export default function CustomersCardButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
            <ButtonBase
                href="/customers/add-customer"
                focusRipple
                key='Image1'
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                width: '25%',
                marginLeft: 75,
                }}
            >
                <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${Image1})`,
                }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    Add New Customer
                    <span className={classes.imageMarked} />
                </Typography>
                </span>
            </ButtonBase>

            <ButtonBase
                href="/customers/list-customers"
                focusRipple
                key='Image'
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                width: '25%',
                marginLeft: 75,
                }}
            >
                <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${Image})`,
                }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    View Customers List
                    <span className={classes.imageMarked} />
                </Typography>
                </span>
            </ButtonBase>

            <ButtonBase
                href="/customers/edit-customers"
                focusRipple
                key='Image2'
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                width: '25%',
                marginLeft: 75,
                }}
            >
                <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${Image2})`,
                }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    Edit Customers
                    <span className={classes.imageMarked} />
                </Typography>
                </span>
            </ButtonBase>
      </div>
    );
  }