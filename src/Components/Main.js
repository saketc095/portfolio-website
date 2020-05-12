import React from 'react';
import { Switch, Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Timeline from './Timeline';


const Main= () => (
    <Switch>
    <Route exact path ="/" component={LandingPage} /> 
        <Route exact path ="/portfolio-website" component={LandingPage} /> 
        <Route exact path ="/about" component={About} /> 
        <Route exact path ="/timeline" component={Timeline} /> 
        <Route exact path ="/contact" component={Contact} /> 
    </Switch>
)

export default Main