import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {beginSearch,filterPlayers, fetchPlayers} from '../player-action.js'
import moxios from 'moxios';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const mockStore = configureMockStore([thunk]);

describe('>>>A C T I O N --- Test player actions',()=>{
    it('+++ actionCreator beginSearch', () => {
        const search = beginSearch()
        expect(search).toEqual({type:"BEGIN_SEARCH"})
    });

    it('+++ actionCreator filterPlayers', () => {
        const players = filterPlayers({name: 'sergio',}, [1,2,3])
        expect(players).toEqual({type:"FILTER_PLAYERS",search:{name: 'sergio'}, players:[1,2,3]})
    });

    describe("get players", () => {
        beforeEach(() => moxios.install());
        afterEach(() => moxios.uninstall());

        it("handles fetches all players", async () => {
            const mockData =  [ {"name" : "Romelu Lukaku"}, { "name" : "David de Gea", }]
            const store = mockStore();
            const search =  {
                playerName: 'sergio',
                age: '10',
                position: 'Centre-Forward'
            }
            moxios.stubRequest('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', {
                status: 200,
                response: mockData
              });

            await store.dispatch(fetchPlayers(search));

            const actions = store.getActions();
            expect(actions[0]).toEqual({type: "BEGIN_SEARCH"});
            expect(actions[1]).toEqual({type: "FILTER_PLAYERS", search: search ,players: mockData});
            
           
        });
      });
});