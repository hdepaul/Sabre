import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/player-action.js';
import './players.css';
import { Table,FormGroup, Form, FormControl, Button } from 'react-bootstrap';
import {connect} from 'react-redux';

class PlayerList extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        var search = {
            playerName: this.playerName.value,
            age: this.age.value,
            position: this.position.value   
        }
        this.props.playerActions.fetchPlayers(search);
    }
            
    render() {
        const viewableEls = this.props.players;
        const loading = this.props.loading;

        return (
        <div>
            <div className="Players">Football Player Finder</div>
            <Form inline>
                <FormGroup  controlId="inLinePlayerName" >
                    <FormControl
                        inputRef={ref => { this.playerName = ref; }} 
                        type="text"
                        placeholder="Player Name"
                        
                    />
                </FormGroup>{' '}
                <FormGroup  controlId="inLinePosition" >
                    <FormControl componentClass="select"
                        placeholder="select" 
                        inputRef={ref => { this.position = ref; }} >
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
                
                <FormGroup  controlId="inLineAge" >
                    <FormControl
                        type="text"
                        placeholder="Age"
                        inputRef={ref => { this.age = ref; }} 
                    />
                </FormGroup>{' '}
                <Button
                    bsStyle="primary"
                    disabled={loading}
                    onClick={!loading ? this.handleClick : null}>
                    {loading ? 'Searching...' : 'Search'}
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
                                <td>{ e.nationality }</td>
                                <td>{ e.jerseyNumber }</td>
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
        players: state.playerReducer.players,
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