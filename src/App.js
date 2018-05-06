import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import PlayerList from './players/list/player-list.js';

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
           <PlayerList/>
          </Grid>
        </Jumbotron>
      </div>
    );
  }

}

export default App;
