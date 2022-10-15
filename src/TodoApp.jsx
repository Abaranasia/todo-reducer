import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'

import { todoReducer } from './reducer/todoReducer';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';


// import './TodoApp.css';

const initialState = [
  {
    id: new Date().getTime(),
    todo: "create useReducer example",
    done: false
  }
];

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="container">
      <h1>TodoApp (10), <small>pending: 2</small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} />
        </div>
        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
