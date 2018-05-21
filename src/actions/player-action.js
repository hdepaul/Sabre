import  * as types from "../constants/action-types";
import getPlayers from "../services/player-service.js"


export function beginSearch(){ 
    return {
          type: types.BEGIN_SEARCH
    }
};

export function filterPlayers (search, players){ 
    return {
          type: types.FILTER_PLAYERS, search: search, players: players
    }
};


export function fetchPlayers(search) {

    return dispatch => {
        dispatch(beginSearch());
        return getPlayers()
        .then(function (response) {
            var players = response.data;
            dispatch(filterPlayers(search, players));   
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}