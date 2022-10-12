import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'

import { todoReducer } from './components/todoReducer';

import './TodoApp.css';

const initialState = [
  {
    id: new Date().getTime(),
    todo: "create useReducer example",
    done: false
  }
];

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="container">
      <h1>TodoApp</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <ul>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
          </ul>
        </div>
        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder='Add some task to do'
              className='form-control'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoApp