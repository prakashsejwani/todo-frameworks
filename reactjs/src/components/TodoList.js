import React from 'react'
import {List, ListItem} from 'material-ui/List'

const TodoListComponent = ({ todos }) => (
  <List>
    {todos.map(item => (
			<ListItem key={item}>{item}</ListItem>
    ))}
  </List>
)

export default TodoListComponent;
