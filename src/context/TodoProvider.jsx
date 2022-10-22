import { TodoContext } from "./TodoContext"

import { useTodos } from '../hooks/useTodos';

export const TodoProvider = ({ children }) => {

  const {
    todos,
    todosCount,
    pendingTodos,
    handleAddAction,
    handleDeleteAction,
    handleToggleAction,
  } = useTodos();

  const todosValue = {
    todos,
    todosCount,
    pendingTodos,
    handleAddAction,
    handleDeleteAction,
    handleToggleAction,
  }
  return (
    <TodoContext.Provider value={todosValue}>
      {children}
    </TodoContext.Provider>
  )
}
