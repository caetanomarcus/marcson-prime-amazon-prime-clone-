import { createStore, combineReducers } from 'redux'

const reducers = combineReducers(
    {
        prop1: function(state, action) {
        return {
                       exemplo: 'Deu certo!'
                       }
        },
    
        prop2: function(state, action) {
        return {
                exemplo: 'De novo, deu certo!'
                }
        }
    }
)


function store() {
	return createStore(reducers)
}

export default store