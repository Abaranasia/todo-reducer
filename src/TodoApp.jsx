import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './TodoApp.css'


function TodoApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="TodoApp">
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
      </ul>
    </div>
  )
}

export default TodoApp
