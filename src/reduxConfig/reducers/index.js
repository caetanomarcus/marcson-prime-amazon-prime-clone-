import {ADD_SHOWS} from '../constants/actions-types'

const initialState = {
    shows: []
}

function rootReducer(state = initialState, action){
    if(action.type === ADD_SHOWS){
       return {
        ...state,
        shows: action.payload
       }
        
    }

    return state
};

export default rootReducer;