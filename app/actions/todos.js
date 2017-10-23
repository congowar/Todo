import * as types from '../constants/ActionTypes';
import axios from 'axios';
import _ from 'lodash';

export const fetchTodos = () => (
  (dispatch, getState) => {
    const request = axios.get(`${types.REST}/todos`);

    request
      .then(res => {
        dispatch({
          type: types.FETCH_TODOS,
          payload: res.data
        })
      }).catch(err => console.log(err))
  }
)

export const addTodo = name => (
  (dispatch, getState) => {
    const request = axios.post(`${types.REST}/todos`,
      {
        "id": _.random(1, 100),
        "text": name,
        "author": "congo",
        "completed": false
      }
    );

    request.then(res => {
      dispatch({
        type: types.ADD_TODO,
        name
      })
    }).catch(err => console.log(err))
  }
);

export const clearAllTodos = () => (
  (dispatch, getState) => {
    axios.get(`${types.REST}/todos?_start=0&_end=1`)
      .then(res => dispatch({ type: types.CLEAR_ALL }))
      .catch(err => console.log(err));
  }
);

export const setComplete = (id, completed) => {
  (dispatch, getState) => {
    axios.put(`${types.REST}/todos/${id}`,
      {
        
      }
    )
  }
}
