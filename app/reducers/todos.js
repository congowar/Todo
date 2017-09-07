import * as types from '../constants/ActionTypes';

export default function todos(state=null, action) {
    switch(action.type) {
        case types.FETCH_TODOS: 
            return action.payload

        default:
            return state
    }
}