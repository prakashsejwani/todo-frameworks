import { combineReducers } from 'redux'
import { ADD_TODO, MODIFY_TODO } from '../actions'

const initialState = {
  todo: '',
  todos: []
}

const todos = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({},
        state,
        { todos: [...state.todos, action.todo],
          todo: ''
        })
    case MODIFY_TODO:
      return Object.assign({},
        state,
        { todo: action.todo })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  todos
})

export default rootReducer
