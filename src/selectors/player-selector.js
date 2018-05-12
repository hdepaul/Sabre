import { createSelector } from 'reselect'

const getPlayers = (state) =>state.playerReducer.players;
const getAge = (state) =>state.playerReducer.selectedAge;
const getPosition = (state) => state.playerReducer.selectedPosition;
const getName = (state) => state.playerReducer.selectedName;

export const getFilteredPlayers = createSelector(
    [getPlayers, getAge, getPosition, getName],
    (players, age, position, playerName) => {
        if (players.length)
        {   
            var filter = {
                name: playerName,
                age: age !== '' ? parseInt(age) : '',
                position: position     
            }
            return players.map(row => {
                
                var today = new Date();
                var birthDate = new Date(row.dateOfBirth);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
                {
                    age--;
                }
                
                return {
                    name : row.name,
                    age: age,
                    team: row.nationality,
                    position: row.position
                }
            })
            .filter(newRow => {
                var result = true;

                for (var key in filter) {
                    if (filter[key] !== ''){
                        if (newRow[key] === filter[key])
                            result = true;
                        else {
                            result = false;
                            break;
                        }
                    }

                }

                return result
            })
        }
        return [];
    }
)