import { useEffect, useReducer, useState } from 'react'
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

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddAction = (newTodo) => {
    // Sets the add action & payload to dispatch
    const action = {
      type: '[TODO] add todo',
      payload: newTodo,
    };
    dispatch(action);
  };

  const handleDeleteAction = (id) => {
    // Sets the delete action & payload to dispatch
    dispatch({
      type: '[TODO] remove todo',
      payload: id,
    });
  };


  return (
    <div className="container">
      <h1>TodoApp (10), <small>pending: 2</small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDelete={handleDeleteAction}
          />
        </div>
        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd handleAddAction={handleAddAction} />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
