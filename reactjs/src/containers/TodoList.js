import { connect } from 'react-redux'

const todoListComponent = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos && todos.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}


const TodoList = connect(
  mapStateToProps
)(todoListComponent)

export default TodoList