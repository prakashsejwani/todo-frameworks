import { connect } from 'react-redux'
import AddTodoComponent from '../components/AddTodo'
import { addTodo, modifyTodo } from '../actions'

const mapStateToProps = state => {
  return {
    todo: state.todos.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	onChange: e => dispatch(modifyTodo(e.target.value)),
  	onClick: todo => dispatch(addTodo(todo)),
	  onEnterKeyPress: (e, todo) => e.key === "Enter" && dispatch(addTodo(todo))
  }
}

const AddTodo = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodoComponent)



export default AddTodo
