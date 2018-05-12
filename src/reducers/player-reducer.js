import * as types  from "../constants/action-types";

const initialState = {
    players: [],
    selectedAge: '',
    selectedPosition: '',
    selectedName: '',
    loading: false
};
  
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PLAYERS:

            return { 
                ...state, 
                players: action.players,
                selectedAge: action.search.age,
                selectedPosition: action.search.position,
                selectedName: action.search.playerName,
                loading: false
            };
        
        case types.BEGIN_SEARCH:

            return { ...state, players: [], loading: true};

        default:
            return state;
    }
};



export default playerReducer;