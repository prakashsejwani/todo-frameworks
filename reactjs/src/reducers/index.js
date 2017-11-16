import {ADD_TODO} from '../actions'

export default const todos = (state=[], action) => {
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
