import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/TodoProvider'
import TodoApp from './TodoApp'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  </React.StrictMode>
)
