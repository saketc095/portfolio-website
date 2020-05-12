import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import {Grid, Cell } from 'react-mdl';

export default class Timeline extends Component {
  render() {
    return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="IntroPage">
                    <Cell col={12}>
                    <div className="intro-text">
                            <br></br>
                            <h2>TIMELINE</h2>
                            <br></br>
                    </div>

                    <div className="timeline-grid">
                    <Card className="timeline-card" shadow={5} style={{width: '1250px', height:'160px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <h2>Computer Programmer at Global Health Impact    <span>October 2019- January 2020</span></h2>
                        <Card.Text className="Card2Tx">
                        I had the opportunity to be a part of Web development team of Global Health Impact. My major part of the work has been into 
                        enhancing the website by adding new functionalities to it. We were able to design a forecasting tool to evaluate products impact on global health
                        </Card.Text>
                    </Card>
                    
                    <Card className="timeline-card" shadow={5} style={{width: '1250px', height:'160px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <h2>Graduate studies from SUNY Binghamton, New York, USA    <span>August 2018-Present</span></h2>
                        <Card.Text className="Card2Tx">
                        I am pursuing my graduate studies (Master's in Science) with major in Computer Science. It has helped me provide a career boost to
                        expand my knowledge in this field and has exceptionally prepared me by specializing skills in the areas of software development.
                        </Card.Text>
                    </Card>
                    
                    <Card className="timeline-card" shadow={5} style={{width: '1250px', height:'160px',margin: 'auto',backgroundColor: 'transparent'}}>
                        <h2>UnderGraduate studies from University of Mumbai, Mumbai    <span>August 2013-May 2017</span></h2>
                        <Card.Text className="Card3Tx">
                        I have completed my undergraduate studies (Bachelor's in Engineering) in Computer Engineering from Atharva College of Engineering, Mumbai.
                        I had taken courses like OOPs, Theory of Computer Science, Web Technologies over the years and have better understanding of these subjects.
                        I have also been a part of National Service Scheme for 2 years which served as a platform to serve the society and nation.

                        </Card.Text>
                    </Card>
                    </div>
                    {/* <FABButton style={{backgroundColor:'white'}} className="button1">
                                <Icon name="add" />
                    </FABButton>
                    
                    <FABButton style={{backgroundColor:'white'}} className="button2">
                        <Icon name="add" />
                    </FABButton>

                    <FABButton style={{backgroundColor:'white'}} className="button3">
                        <Icon name="add" />
                    </FABButton> */}
            </Cell>
        </Grid>
    </div>  
                     
            
    )
  }
}