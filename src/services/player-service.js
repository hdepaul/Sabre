import axios from 'axios';

export default function getPlayers(){
    return axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
}