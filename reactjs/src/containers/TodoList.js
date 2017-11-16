import { connect } from 'react-redux'
import TodoListComponent from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}


const TodoList = connect(
  mapStateToProps
)(TodoListComponent)

export default TodoList
