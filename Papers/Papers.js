import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import * as data from './PaperList.json';





const classes = {
  root: {
    width: '70%',
    margin: '15%',
    marginTop: '5%',
    marginBottom: '5%', 
    fontFamily: 'Optima',
    color: '#6a737b'   
  }
};


const ListOfPapers =  data.list.map((item)=>{ return(
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      
      style={{ backgroundColor : '#b2dfdb'}}
    >
        <Typography className={classes.root} > 
           <span style={{  fontSize : '16px', color: '#333333'   }}> {item.title} <br/></span> 
           <span style={{ fontSize : '13px', color: '#333333'   }} > {item.authors} <br/> {item.journal} </span>
        </Typography>
    </ExpansionPanelSummary>
  
    <ExpansionPanelDetails style={{backgroundColor :'#eeeeee'}}>
      <Typography>
        <p style ={{marginLeft : '6%', width : '88%',  fontSize : '14px', color: '#333333'}}>Abtract:   <br/><br/> {item.abstract} 
        <br/> <Link href={item.arXiv}>arXiv</Link>         </p>
        
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);
  }
  );

export class Papers extends Component {

  
  

  render(){
    
    return(
      
    <div style={classes.root}>
      <h1 align="center" color="#6a737b" >Research Papers</h1>
      <br/><br/><br/>
       {ListOfPapers}
    </div>
    );
  
}
}

export default Papers;