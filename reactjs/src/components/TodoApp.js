import React, { Component } from "react";
import { connect } from 'react-redux'
import AppBar from "material-ui/AppBar";

import AddTodo from "../containers/AddTodo.js";
import TodoList from "../containers/TodoList.js";
import { rightMargin } from "./Styles.js";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AppBar title="Todo App" />
        <div style={rightMargin}>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    )
  }
}

TodoApp = connect()(TodoApp)

export default TodoApp