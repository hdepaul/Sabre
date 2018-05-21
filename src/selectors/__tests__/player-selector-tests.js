
import React, { Component } from 'react';
import { getFilteredPlayers } from '../../selectors/player-selector.js'

describe('Player Selector', () => {
    
   
    it('should return filtered players', () => {
        var mockParameters = {
            players: [ {
                "contractUntil" : "2022-06-30",
                "dateOfBirth" : "1993-05-13",
                "jerseyNumber" : 9,
                "name" : "Romelu Lukaku",
                "nationality" : "Belgium",
                "position" : "Centre-Forward"
              }, {
                "contractUntil" : "2019-06-30",
                "dateOfBirth" : "1990-11-07",
                "jerseyNumber" : 1,
                "name" : "David de Gea",
                "nationality" : "Spain",
                "position" : "Keeper"
              }],
            selectedAge: '',
            selectedPosition: 'Centre-Forward',
            selectedName: '',
        };
        const selected = getFilteredPlayers.resultFunc(mockParameters.players, mockParameters.selectedAge, mockParameters.selectedPosition, mockParameters.selectedName);
        expect(selected).toEqual( [ {
            "age" : 25,
            "name" : "Romelu Lukaku",
            "team" : "Belgium",
            "position" : "Centre-Forward"
          }]);
    });
    
  });