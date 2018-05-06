import * as types  from "../constants/action-types";

const initialState = {
    players: [],
    loading: false
};
  
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PLAYERS:

            var players = search(action.search, action.players)
            return { ...state, players, loading: false};
        
        case types.BEGIN_SEARCH:

            return { ...state, players: [], loading: true};

        default:
            return state;
    }
};

function search(serach, players){
    let playerName = serach.playerName;
    let age = serach.age;
    let position = serach.position;
    return players.filter(row => 
        row.name == playerName || 
        row.jerseyNumber == age || 
        row.position == position)
}

export default playerReducer;