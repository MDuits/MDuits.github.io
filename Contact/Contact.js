import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import me from './me.jpg'




const useStyles = makeStyles( {
    root: {
        marginTop: '7%',
        backgroundColor: '#b2dfdb',
        width: '70%',
        padding: '3%',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: '16',
        minWidth: 600
    }});

export default function SimpleCard() {

  const classes=useStyles();

  return (
    <div  className={classes.root}>
    <Grid container  justify="center" spacing={2}>
    <h1 style={{marginBottom: '5%'}}>Contact</h1>
    <Grid item xs={12}>
      <Grid container justify="center">
      
          <Grid  item xs={6}>
          
  
                    <Typography variant="body2" style={{fontSize: 17}} component="p" color="textSecondary">
                    
                    Mathematics Department <br/>
                    Royal Institute of Technology <br/>
                    Lindstedtsvägen 25 <br/>
                    10044 Stockholm <br/>
                    Sweden<br/>
                    <br/>
                    Office: 3521 <br/>
                    E-mail: lastname at kth dot se <br/>
                    Phone: (+46) <br></br>
                    </Typography>
                    <Button size="small"><Link href='https://www.kth.se/math/people/find-us-1.833819'>Directions</Link> </Button>
          
            </Grid>
            <Grid item xs={3}>
            
    
                     
          
             <img src={me} style={{flex: 1, height: 230}}></img>
          
      </Grid>
      </Grid>
    </Grid>
    </Grid>
    </div>
     );
}