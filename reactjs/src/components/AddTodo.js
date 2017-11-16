import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {rightMargin} from './Styles.js';

const AddTodoComponent = ({ todo, add, onEnterKeyPress, onClick, onChange }) => {
  return (
    <div>
      <TextField
        floatingLabelText="Add Todo"
        name='todoItem'
        value={todo}
        onChange={onChange}
        onKeyPress={e => onEnterKeyPress(e, todo)}
        />
      <RaisedButton
        style={rightMargin}
        label="Add Todo"
        primary={true}
        onClick={() => onClick(todo)}
        />
    </div>
  )
}

export default AddTodoComponent;