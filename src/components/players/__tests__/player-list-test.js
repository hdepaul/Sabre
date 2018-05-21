import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'

import ConnectedPlayerList, { PlayerList } from '../player-list.js';


describe('Player List Component initial state', () => {

    let wrapper;
   
    const mockbindActionCreatorsfn = jest.fn();
    const players = [];
    
    beforeEach(() => {
        wrapper = mount(<PlayerList playerActions={mockbindActionCreatorsfn} players={players}/>)
    })

    it('should render without throwing an error', () => {
        expect(wrapper.length).toEqual(1);
    })

    it('renders a player name input', () => {
        expect(wrapper.find('#playerName').length).toEqual(1)
    })
    
    it('renders a position input', () => {
        expect(wrapper.find('#position').length).toEqual(1)
    })

    it('renders age input', () => {
        expect(wrapper.find('#age').length).toEqual(1)
    })

    it('renders table', () => {
        expect(wrapper.find('Table').length).toEqual(1)
        expect(wrapper.find('thead').length).toEqual(1)
        expect(wrapper.find('tbody').length).toEqual(1)
    })

    describe('playerName input', () => {
        it('should respond to change event and change the state of the playerList Component', () => {
            wrapper.find('#playerName').simulate('change', {target: {id: 'playerName', value: 'Sergio Romero'}});
            expect(wrapper.state('playerName')).toEqual('Sergio Romero');
        })
        
        it('should set only letters in player name state', () => {
            wrapper.find('#playerName').simulate('change', {target: {id: 'playerName', value: '123Sergio'}});
            expect(wrapper.state('playerName')).toEqual('Sergio');
        })
      
    })

    describe('position input', () => {

        it('should respond to change event and change the state of the playerList Component', () => {
            wrapper.find('#position').simulate('change', {target: {id: 'position', value: 'Attacking Midfield'}});
            expect(wrapper.state('position')).toEqual('Attacking Midfield');
        })
    })

    describe('age input', () => {
        it('should respond to change event and change the state of the playerList Component', () => {
            wrapper.find('#age').simulate('change', {target: {id: 'age', value: '20'}});
            expect(wrapper.state('age')).toEqual('20');
            expect(wrapper.find('button').at(0).prop('disabled')).toBe(false);
        })

        it('should disable seacrh button for invalid age', () => {
            wrapper.find('#age').simulate('change', {target: {id: 'age', value: '10'}});
            expect(wrapper.find('button').at(0).prop('disabled')).toBe(true);
        })
    })
})


describe('When the form is submitted', () => {

    let wrapper;
   
    const mockbindActionCreatorsfn = {
        fetchPlayers : jest.fn()
    };
    
    const players = [];
        
    beforeEach(() => {
        wrapper = mount(<PlayerList playerActions={mockbindActionCreatorsfn} players={players}/>)
    })

    it('should call the mock search function', () => {
        var search = {
            playerName: "Sergio Romero",
            age: "20",
            position: 'Attacking Midfield'  
        }

        wrapper.find('#playerName').simulate('change', {target: {id: 'playerName', value: 'Sergio Romero'}});
        wrapper.find('#age').simulate('change', {target: {id: 'age', value: '20'}});
        wrapper.find('#position').simulate('change', {target: {id: 'position', value: 'Attacking Midfield'}});
        wrapper.find('button').at(0).simulate('click');
        expect(mockbindActionCreatorsfn.fetchPlayers).toHaveBeenCalledWith(search)
    })

})

describe('>>>Player list --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {
        playerReducer: {
            players: [],
            loading: false
        }
    }
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow(<ConnectedPlayerList store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(PlayerList).prop('players')).toEqual(initialState.playerReducer.players)
    });

});