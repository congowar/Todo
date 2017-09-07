import * as types from '../constants/ActionTypes';
import axios from 'axios';

export const fetchTodos = () => (
    (dispatch, getState) => {
        const request = axios.get(`${types.REST}/todos`);

        request
            .then(res => {
                dispatch({ 
                    type: 'FETCH_TODOS', 
                    payload: res.data 
                }) 
            }).catch(err => console.log(err))
    }
)


export const addTodo = name => ({ type: types.ADD_TODO, name });
export const deleteTodo = id => ({ type: types.DELETE_TODO, todo });
export const editTodo = (id, name) => ({ type: types.EDIT_TODO, name });
export const clearAllTodos = () => ({ type: types.CLEAR_ALL });