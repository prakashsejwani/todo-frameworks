import React from 'react'
import {List, ListItem} from 'material-ui/List'

const TodoListComponent = ({ todos }) => (
	<div className="center">
	  <List className="width">
	    {todos.map(item => (
				<ListItem key={item}>{item}</ListItem>
	    ))}
	  </List>
  </div>
)

export default TodoListComponent;
