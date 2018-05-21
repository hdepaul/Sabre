import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import ConnectedPlayerList from './components/players/player-list.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">SABRE INTRODUCTORY EXERCISE</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
           <ConnectedPlayerList/>
          </Grid>
        </Jumbotron>
      </div>
    );
  }

}

export default App;
