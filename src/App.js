import React,{Component} from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Contact from './Components/Contact';


class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
                <LandingPage/>
                <About/>
                <Timeline/>
                <Contact/>
            
                <a style={{color: 'black'}} href="https://www.facebook.com/saket.chinchalikar.1" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook-square" aria-hidden="true" /></a>

                <a style={{color: 'black'}} href="https://www.linkedin.com/in/saket-chinchalikar/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true" /></a>

                <a style={{color: 'black'}} href="https://www.instagram.com/saket9_c/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true" /></a>

               <a style={{color: 'black'}} href="https://github.com/saketc095" rel="noopener noreferrer" target="_blank">
               <i className="fa fa-github" aria-hidden="true" /></a>
  </div>
    );
  } 
}
export default App;
