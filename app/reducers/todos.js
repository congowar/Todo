import * as types from '../constants/ActionTypes';

export default function todos(state = null, action) {
  switch (action.type) {
    case types.FETCH_TODOS:
      return action.payload

    case types.ADD_TODO:
      return [...state,
        {
          "id": _.random(1, 100),
          "text": action.name,
          "author": "congo",
          "completed": false
        }
      ]

    default:
      return state
  }

}