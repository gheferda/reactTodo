import React from 'react';
import Button from '@mui/material/Button';

const TodoList = () => {
  return (
    <div className="TodoListWrapper">
      <ul>
        <li>
          <span>Walking on the park</span>
          <span><Button variant="contained">Edit</Button></span>
          <span><Button variant="contained">Delete</Button></span>
        </li>
        <li>
          <span>Reading Books</span>
          <span><Button variant="contained">Edit</Button></span>
          <span><Button variant="contained">Delete</Button></span>
        </li>
        <li>
          <span>Walking on the park</span>
          <span><Button variant="contained">Edit</Button></span>
          <span><Button variant="contained">Delete</Button></span>
        </li>
      </ul>
    </div>
  )
}

export default TodoList;
