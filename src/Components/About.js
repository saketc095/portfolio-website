import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import {Grid , Cell} from 'react-mdl';
import {ProgressBar} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
            <div className="Abt" id="abt" style={{width:'100%',margin:'auto'}}>
                <Grid className="aboutPage">
                    <Cell className="about-text" col={12}>
                      <br></br>
                      <h2>ABOUT ME</h2>
                      <h3>WHO AM I?</h3>
                      <p>I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years in terms of technology..!!<br></br>
                         Designing and Coding has been my passion since the days I started working with computers and I enjoy creating beautifully designed, intuitive and functional websites.</p>
                      <h3>WHAT I DO?</h3>
                      <h3>HERE ARE SOME OF MY EXPERTISE</h3>
                    </Cell>  

                    <Cell className="about-grid" col={12}>
                      <Card className="about-card" shadow={5} style={{width: '400px', height:'300px',margin:'auto',backgroundColor: 'transparent'}}>
                      <Card.Body>
                      <Card.Title className="Card1T" >Software and Web Development</Card.Title>
                      <br></br>
                      <Card.Text className="Card1Tx">
                        I love to create dynamic websites using React,HTML/CSS. But at the same time I also get my hands dirty on back-end development in JAVA, along with computer science fundamentals. 
                      </Card.Text>
                      </Card.Body>
                      </Card>

                      <Card className="about-card" shadow={5} style={{width: '400px', height:'300px',margin:'auto',backgroundColor: 'transparent'}}>
                      <Card.Body>
                      <Card.Title className="Card2T">Data Structure and Algorithms</Card.Title>
                      <br></br>
                      <Card.Text className="Card2Tx">
                        As coming from the CS background, I have good grasp over fundamental concepts of DSA which can be used to organize data efficiently and increase performance to solve complex problems.
                      </Card.Text>
                      </Card.Body>
                      </Card>

                      <Card className="about-card" shadow={5} style={{width: '400px', height:'300px',margin:'auto',backgroundColor: 'transparent'}}>
                      <Card.Body>
                      <Card.Title className="Card3T">Graduate Student Assistant</Card.Title>
                      <br></br>
                      <Card.Text className="Card3Tx">
                        I work with Watson School Dean's Office to assist and support the recruitment team to counsel international students and conducting various research tasks.
                      </Card.Text>
                      </Card.Body>
                      </Card>
                    </Cell>       
                </Grid>
            </div>  
    )
  }
}