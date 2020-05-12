import React,{Component} from 'react';
import './App.css';
import Main from './Components/Main';
import {Link} from 'react-router-dom'; 
import {Navigation, Layout, Header, Content, Drawer} from 'react-mdl';


class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className ="header-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio-website">MYPORTFOLIO</Link>} scroll>
              <Navigation>
                  <Link style={{color: 'black'}} to="/about">ABOUT</Link>
                  <Link style={{color: 'black'}} to="/timeline">TIMELINE</Link>
                  <Link style={{color: 'black'}} to="/contact">CONTACT</Link>
              </Navigation>
          </Header>
          <Drawer title="MYPORTFOLIO">
          <Navigation>
                  <Link style={{color: 'black'}}to="/about">About</Link>
                  <Link style={{color: 'black'}}to="/timeline">Timeline</Link>
                  <Link style={{color: 'black'}}to="/contact">Contact</Link>
                  <a style={{color: 'black'}} href="https://www.facebook.com/saket.chinchalikar.1" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" /></a>

                  <a style={{color: 'black'}} href="https://www.linkedin.com/in/saket-chinchalikar/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true" /></a>

                  <a style={{color: 'black'}} href="https://www.instagram.com/saket9_c/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" /></a>

                  <a style={{color: 'black'}} href="https://github.com/saketc095" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" /></a>
              </Navigation>
          </Drawer>
          <Content >
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
  </div>
  
    );
  }
  
}

export default App;
