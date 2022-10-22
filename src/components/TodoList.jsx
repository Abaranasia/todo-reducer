import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDelete, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}
