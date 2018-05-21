import playerReducer from '../player-reducer.js'

describe('>>>R E D U C E R --- Test playerReducer',()=>{
    it('+++ reducer for FILTER_PLAYERS', () => {
        let state = {
            players: [],
            selectedAge: '',
            selectedPosition: '',
            selectedName: '',
            loading: false 
        }
        state = playerReducer(state,
            {
                type:"FILTER_PLAYERS",
                search: 
                    {
                        playerName: 'sergio',
                        age: '10',
                        position: 'Centre-Forward'
                    },
                players: [1,2,3]
            }) 
        
        expect(state).toEqual({
            players:  [1,2,3],
            selectedAge: '10',
            selectedPosition: 'Centre-Forward',
            selectedName: 'sergio',
            loading: false
         })
    });

    it('+++ reducer for BEGIN_SEARCH', () => {
        let state = {
            players: [1,2,3],
            selectedAge: '10',
            selectedPosition: '',
            selectedName: '',
            loading: false 
        }
        state = playerReducer(state,{type:"BEGIN_SEARCH"})
        expect(state).toEqual(
            {
                players: [],
                selectedAge: '10',
                selectedPosition: '',
                selectedName: '',
                loading: true
            })
    });
});