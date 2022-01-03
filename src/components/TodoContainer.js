import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TodoContainer = () => {
  return (
      <div className="TodoContainerWrapper">
        <h1>Todo App</h1>
          <form>
            <TextField
            id="standard-basic" label="Add Here" variant="standard" />
            <Button variant="contained">Add Todo</Button>
          </form>
      </div>
  )
}

export default TodoContainer;
