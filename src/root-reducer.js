import {combineReducers} from 'redux';
import playerReducer from './reducers/player-reducer.js';

const rootReducer = combineReducers({
    playerReducer
});

export default rootReducer;