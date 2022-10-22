import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

const TodoApp = () => {

  const {
    todos,
    todosCount,
    pendingTodos,
    handleAddAction,
    handleDeleteAction,
    handleToggleAction,
  } = useTodos();

  return (
    <div className="container">
      <h1>TodoApp ({todosCount}), <small>pending: {pendingTodos}</small></h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onDelete={handleDeleteAction}
            onToggleTodo={handleToggleAction}
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
};

export default TodoApp
