import React, {Component} from 'react';

import { classDeclaration } from '@babel/types';

const classes= {
    root : {
        flexGrow: 1,
        width : '80%',
        backgroundColor: '#b2dfdb',
        color: '#333333',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justify: 'center',
        marginTop: '5%' 
    },
    h1 : {
    padding: '2%',
    textAlign: 'center',
    color: '#6a737b'  },
    p :{
        color: '#333333' ,
        padding: '3%'}   
    }
export class Teaching extends Component {

    render() {
        return ( <div style={classes.root}>
            <p style={classes.p}> Most of my research is on random matrices and integrable probability. 
           Random matrices Determinantal point processes
           Orthogonal polynomials 
           Riemann-Hilbert problem
           </p>
            <h2 style={classes.h1}>Patterns from randomness</h2>
            <p  style={classes.p}> Take a regular hexagon and tile the hexagon with three types of tiles (also called lozenges), in the following way:
           There are many different ways to tile the hexagon. Now let us play the following game: we put all possible tilings in a bag and without looking we take one tiling at random. How does this tiling roughly look like?
          Since  every possible tiling is equally likely, one may think that is a silly question: you certainly do not expect to see any structure. 
          Well, this is indeed more or less true if our hexagon is small. But, when we play this game for very large hexagons a striking phenomenon takes place. Click the right picture:
          </p>
          <p style={classes.p}> In the picture </p>

        </div>);
    }
}

export default Teaching;