import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const TodoItem = ({ todo }) => {

  const { handleDeleteAction, handleToggleAction } = useContext(TodoContext);

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
        onClick={() => handleToggleAction(todo.id)}
      >
        {todo.todo}
      </span>
      <button
        className='btn btn-danger'
        onClick={() => handleDeleteAction(todo.id)}
      >
        Delete
      </button>

    </li>
  )
}
