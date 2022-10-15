import React from 'react'
import { handleDeleteAction } from '../actions/todoActions';

const handleDeleteButton = (todoId) => {
  handleDeleteAction(todoId)
};

export const TodoItem = ({ todo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='align-self-center'>{todo.todo}</span>
      <button
        className='btn btn-danger'
        onClick={() => handleDeleteButton(todo.id)}
      >
        Delete
      </button>

    </li>
  )
}
