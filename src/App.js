import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="app-main">
        <TodoContainer />
        <TodoList />
    </div>
  )
}



export default App;
