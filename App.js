import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Background from './back.jpg';
import Home from './Home/Home';
import Teaching from './Teaching/Teaching';
import Research from './Research/Research';
import Contact from './Contact/Contact';
import Papers from './Papers/Papers';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

//import PanZoomElement from 'react-pan-zoom-element';

const styleFirstPage =
  {
    flexGrow: 1,
    width: '100%',
    height: '900px',
    backgroundImage: "url(" +  Background  + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#6a737b',
    fontSize: '13p',
    fontFamily: 'Optima',
};


const styleOtherPages =
  {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    height: '1000px',
    color: '#6a737b',
  
  };


  const AppbarStyleFirst = {
    background: 'transparent', 
    color: 'white',
    position: 'fixed',
    top: 0,
    elevation: '10'
}

const AppbarStyleOther = {
  background:  '#009688',
  color: 'white',
  align: 'center',
  position: 'fixed',
  top: 0,
  elevation: '10',
}



function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


function App() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    
    <div style={ (value === 0) ?  styleFirstPage  :  styleOtherPages}>
      
      <AppBar
              style={ (value === 0) ?  AppbarStyleFirst  :  AppbarStyleOther}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          backgroundColor="secondary"       
        >
          <Tab label="Home"  />
          <Tab label="Research"  />
          <Tab label="Papers"  />
          <Tab label="Teaching"  />
          <Tab label="Contact"  />
          >
        </Tabs>
      </AppBar>
      
      {value === 0 && <TabContainer><Home/></TabContainer>}
      {value === 1 && <TabContainer> <Research/> </TabContainer>}
      {value === 2 && <TabContainer> <Papers/> </TabContainer>}
      {value === 3 && <TabContainer> <Teaching/> </TabContainer>}
      {value === 4 && <TabContainer> <Contact/> </TabContainer>}
      </div>
  );
}

export default App;
