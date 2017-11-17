import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddTodoComponent = ({ todo, add, onEnterKeyPress, onClick, onChange }) => {
  return (
    <div className="center">
      <div className="width">
      <TextField
        floatingLabelText="Add Todo"
        name='todoItem'
        value={todo}
        onChange={onChange}
        fullWidth={true}
        onKeyPress={e => !!todo && onEnterKeyPress(e, todo)}
        />
      <RaisedButton
        label="Add Todo"
        primary={true}
        className="addButton"
        onClick={() => !!todo && onClick(todo)}
        />
      </div>
    </div>
  )
}

export default AddTodoComponent;