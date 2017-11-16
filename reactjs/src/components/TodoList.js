import React from 'react'

const TodoListComponent = ({ todos }) => (
  <ul>
    {todos.map(item => (
			<li key={item}>{item}</li>
    ))}
  </ul>
)

export default TodoListComponent;
