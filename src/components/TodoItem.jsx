import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='align-self-center'>{todo.todo}</span>
      <button
        className='btn btn-danger'
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>

    </li>
  )
}
