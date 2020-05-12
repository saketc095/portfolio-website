import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Saket Chinchalikar</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/faces-solid-1/48/48-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Want to get in touch? I'd love to hear from you. Here's how you can reach to me</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +1(607)-232-8987
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    saketc095@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a style={{textDecoration: 'none', color: 'black'}} href="https://www.linkedin.com/in/saket-chinchalikar/" target="_blank">Saket Chinchalikar</a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;