import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

import AddTodo from "./AddTodo.js";
import TodoList from "../containers/TodoList.js";
import { rightMargin } from "./Styles.js";

export default class TodoApp extends Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEnterKeyPress = e => {
    return e.key === "Enter" && this.addTodoToList(this.state.todoItem);
  };

  addTodoToList = todo => {
    const todoList = this.state.todoList;
    todoList.push(todo);
    this.setState({ todoList, todoItem: "" });
  };

  render() {
    const { todoList, todoItem } = this.state;
    return (
      <div>
        <AppBar title="Todo App" />
        <div style={rightMargin}>
          <AddTodo
            todo={todoItem}
            handleChange={this.handleChange}
            add={this.addTodoToList}
            onEnterKeyPress={this.onEnterKeyPress}
          />
          <TodoList />
        </div>
      </div>
    );
  }
}
