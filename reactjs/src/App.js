import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";

import AddTodo from "./containers/AddTodo.js";
import TodoList from "./containers/TodoList.js";
import { rightMargin } from "./components/Styles.js";

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <AppBar title="Todo App" />
      <div style={rightMargin}>
        <AddTodo />
        <TodoList />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
