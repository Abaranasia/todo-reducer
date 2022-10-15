import React, { useState } from 'react'

export const TodoAdd = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddTodo = (event) => {
    // creates the new TODO item and calls the action to dispatch it
    event.preventDefault();

    if (inputValue <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      todo: inputValue,
      done: false
    };

    console.log(newTodo)
    setInputValue(""); // Resets form input
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder='Add some task to do'
        className='form-control'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className='btn btn-outline-primary mt-1'
      >
        Add
      </button>
    </form>
  )
}