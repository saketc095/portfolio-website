import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import myPic from '../myPic.jpg';
import Resume from '../Resume.pdf'
import {Link} from 'react-scroll';



class LandingPage extends Component{
    render(){
        return(
            <div id="lp">
                <Grid className="landing-page" >
                <Link style={{color:'white', margin:'auto'}} activeClass="active" to="abt" spy={true} smooth={true} offset={0} duration= {1000}>ABOUT</Link>
                <Link style={{color:'white', margin:'auto'}} activeClass="active" to="timeline" spy={true} smooth={true} offset={0} duration= {1000}>TIMELINE </Link>                
                <Link style={{color:'white', margin:'auto'}} activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {1000}>CONTACT </Link>   
                    <Cell col={12}>
                        <img className="myPic" src = {myPic} alt="mypic"/>

                        <div className="title">
                            <h1>Hi, <br />I'm Saket Chinchalikar</h1>
                            <p className="resume-text"><a href={Resume} target="blank">View Resume</a></p>
                            <br></br>
                            
                            <p> Full Stack Developer | Software Engineer | Coder</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/saket.chinchalikar.1" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" /></a>

                                <a href="https://www.linkedin.com/in/saket-chinchalikar/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" /></a>

                                <a href="https://www.instagram.com/saket9_c/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" /></a>

                                <a href="https://github.com/saketc095" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default LandingPage