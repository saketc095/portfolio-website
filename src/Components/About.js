import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import {Grid , Cell} from 'react-mdl';

export default class About extends Component {
  render() {
    return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="aboutPage">
                    <Cell col={12}>
                    <div className="about-text">
                            <br></br>
                            <h2>WHO AM I?</h2>
                            <p>I am a graduate student from Binghamton University, State University of New York with Computer Science as my major.<br></br>
                               I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years in terms of technology<br></br>
                               Designing and Coding has been my passion since the days I started working with computers and I enjoy creating beautifully designed, intuitive and functional websites.</p>
                            <br></br>
                        
                            <h2>WHAT I DO?</h2>
                            <h3>HERE ARE SOME OF MY EXPERTISE</h3>
                            <br></br>
                    </div>
                    <div className="about-grid">
                    <Card className="about-card" shadow={5} style={{width: '300px', height:'200px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <Card.Body>
                        <Card.Title className="Card1T" >Software and Web Development</Card.Title>
                        <br></br>
                        <Card.Text className="Card1Tx">
                        I have satrted creating websites using JavaScript,React,HTML,CSS. But at the same time I also get my hands dirty on back-end development in JAVA, along with computer science fundamentals. 
                        </Card.Text>
                        </Card.Body>
                        </Card>

                        <Card className="about-card" shadow={5} style={{width: '300px', height:'200px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <Card.Body>
                        <Card.Title className="Card2T">Data Structure and Algorithms</Card.Title>
                        <br></br>
                        <Card.Text className="Card2Tx">
                        As coming from the CS background, I have good grasp over fundamental concepts of DSA which can be used to organize data efficiently and increase performance to solve complex problems.
                        </Card.Text>
                        </Card.Body>
                        </Card>

                        <Card className="about-card" shadow={5} style={{width: '300px', height:'200px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <Card.Body>
                        <Card.Title className="Card3T">Graduate Student Assistant</Card.Title>
                        <br></br>
                        <Card.Text className="Card3Tx">
                        I work with Watson School Dean's Office to assist and support the recruitment team to counsel international students and conducting various research tasks.
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        {/* <Card className="about-card" shadow={5} style={{width: '400px', height:'270px',margin: 'auto',backgroundColor: 'black'}}>
                            <CardTitle style={{color:'#2c3e50'}}>Web Development</CardTitle>
                            <CardTitle style={{color:'#2c3e50'}}>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</CardTitle>
                            <CardActions border>
                                <Button style={{color:'#fff'}}>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" ></IconButton>
                            </CardMenu>
                        </Card>

                        <Card className="about-card" shadow={5} style={{width: '400px', height:'270px',margin: 'auto',backgroundColor: 'black'}}>
                            <CardTitle style={{color:'#2c3e50'}}>Web Development</CardTitle>
                            <CardTitle style={{color:'#2c3e50'}}>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</CardTitle>
                            <CardActions border>
                                <Button style={{color:'#fff'}}>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share" ></IconButton>
                            </CardMenu>
                        </Card> */}
                    </div> 
            </Cell>
        </Grid>
    </div>  
                     
            
    )
  }
}