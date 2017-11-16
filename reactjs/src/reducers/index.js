import { combineReducers } from 'redux'
import {ADD_TODO} from '../actions'

const todos = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.todo,
        }
      ]
    default:
      return state
  }
}


const rootReducer = combineReducers({
  todos
})

export default rootReducer