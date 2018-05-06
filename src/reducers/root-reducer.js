import {combineReducers} from 'redux';
import playerReducer from './player-reducer.js';

const rootReducer = combineReducers({
    playerReducer
});

export default rootReducer;