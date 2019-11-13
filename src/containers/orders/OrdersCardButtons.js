import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../images/karan-bhatia-ib7jwp7m0iA-unsplash.jpg'
import Image1 from '../images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
import Image2 from '../images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 200,
            width: 400,
        },
        control: {
            padding: theme.spacing(2),
        },
        gridInBetweenSpacing: {
            marginTop: 40,
        },
        card: {
            maxWidth: 345,
          },
        media: {
            height: 145,
          },
        
    }),
);




export default function ImgMediaCard() {
  const classes = useStyles();

  

  return (
    <Grid container className={classes.root} spacing={0} >
        <Grid item lg={12}>
            <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>
                {[0, 1].map(value => (
                  <Grid key={value} item>
                    <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Place An Order"
                        height="100%"
                        image={
                            value === 0 ? Image : Image1
                        }
                        title="Place Order"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" 
                            color="primary" 
                            href="/orders/placeorder"
                            fullWidth>
                        {value === 0 ? "Place Order" : "Previous Orders"}
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>

            <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>
                        <Grid>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Edit Orders"
                            height="100%"
                            image={Image2}
                            title="Previous Orders"
                        />
                        </CardActionArea>
                        <CardActions>
                        <Button size="large" 
                            color="primary" 
                            href="/orders/editorder"
                            fullWidth>
                            Edit An Order
                        </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}


//     <Grid container className={classes.root} spacing={0} >
//         <Grid item lg={12}>
//             <Grid className={classes.gridInBetweenSpacing} container justify="center" spacing={5}>
//                 {[0, 1].map(value => (
//                     <Grid key={value} item>
//                         <Card className={classes.card}>
//                         <CardActionArea>
//                         <CardMedia
//                             component="img2"
//                             alt="Edit An Order"
//                             height="100%"
//                             image={Image2}
//                             title="Edit An Order"
//                         />
//                         <CardContent>
//                         </CardContent>
//                         </CardActionArea>
//                         <CardActions>
//                         <Button size="large" color="primary" href="/orders/placeorder">
//                             Edit Order
//                         </Button>
//                         </CardActions>
//                         </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//         </Grid>
//         )};
// }