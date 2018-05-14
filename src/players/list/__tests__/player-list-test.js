import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { PlayerList } from '../player-list.js';

// describe what we are testing
describe('Player List Component', () => {

    let wrapper;
    // our mock login function to replace the one provided by mapDispatchToProps
    const mockbindActionCreatorsfn = jest.fn();
    const players = [];
    
    beforeEach(() => {
        // pass the mock function as the login prop 
        wrapper = shallow(<PlayerList playerActions={mockbindActionCreatorsfn} players={players}/>)
    })

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(wrapper.exists(<form inline></form>)).toBe(true)
    })
})