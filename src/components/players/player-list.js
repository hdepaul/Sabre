import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/player-action.js';
import './players.css';
import { Table,FormGroup, Form, FormControl, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { getFilteredPlayers } from '../../selectors/player-selector.js'

export class PlayerList extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            playerName: "",
            age: "",
            position: "",
        }

        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);

    }
  
    handleClick() {
        var search = {
            playerName: this.state.playerName,
            age: this.state.age,
            position: this.state.position   
        }
        this.props.playerActions.fetchPlayers(search);
    }
   
    handleAgeChange(e) {
        this.setState({ age: e.target.value });
    }
    
    handlePositionChange(e) {
        this.setState({ position: e.target.value  })
    }

    handleNameChange(e) {
        var name = (e.target.value.match("[a-zA-Z ]+") || []).pop() || '';
        this.setState({
            playerName: name,
        });
    }
    
    render() {
        const age = this.state.age;
        const valid = (age === '' || (age >= '18' && age <= '40'));
        const viewableEls = this.props.players;
        const disabled = this.props.loading || !valid;

        return (
        <div>
            <div className="Players">Football Player Finder</div>
            <Form inline>
                <FormGroup  controlId="playerName" >
                    <FormControl
                        type="text"
                        placeholder="Player Name"
                        value={this.state.playerName}
                        onChange={this.handleNameChange}
                        
                    />
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <FormGroup  controlId="position" >
                    <FormControl componentClass="select"
                        placeholder="select" 
                        onChange={this.handlePositionChange}>
                        <option value="">Positions</option>
                        <option value="Attacking Midfield ">Attacking Midfield</option>
                        <option value="Central Midfield">Central Midfield</option>
                        <option value="Centre-Back">Centre-Back</option>
                        <option value="Centre-Forward">Centre-Forward</option>
                        <option value="Centre-Forward">Centre-Forward</option>
                        <option value="Defensive Midfield">Defensive Midfield</option>
                        <option value="Keeper">Keeper</option>
                        <option value="Left Midfield">Left Midfield</option>
                        <option value="Left Wing">Left Wing</option>
                        <option value="Left-Back">Left-Back</option>
                        <option value="Right-Back">Right-Back</option>
                        
                    </FormControl>
                
                </FormGroup>{' '}
                
                <FormGroup  controlId="age">
                    <FormControl
                        type="number"
                        placeholder="Age"
                        onChange={this.handleAgeChange}
                        value={this.state.age}
                   />
                     <FormControl.Feedback />
                </FormGroup>{' '}
                <Button
                    id="searchButton"
                    name='searchButton'
                    bsStyle="primary"
                    disabled={disabled}
                    onClick={!disabled ? this.handleClick : null}>
                    {this.props.loading ? 'Searching...' : 'Search'}
                </Button>

            </Form>
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { viewableEls.map(e => 
                            <tr>
                                <td>{ e.name }</td> 
                                <td>{ e.position }</td>
                                <td>{ e.team }</td>
                                <td>{ e.age }</td>
                            </tr> )
                        } 
                    </tbody>
                </Table>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        players: getFilteredPlayers(state),
        loading: state.playerReducer.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        playerActions:  bindActionCreators(playerActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerList);