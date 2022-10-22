import { useEffect, useReducer } from 'react'

import { todoReducer } from '../reducer/todoReducer';

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

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

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

  const handleToggleAction = (id) => {
    // Sets the toggle action & payload to dispatch
    dispatch({
      type: '[TODO] toggle todo',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodos: todos.filter(todo => !todo.done).length,
    handleAddAction,
    handleDeleteAction,
    handleToggleAction,
  }
}
