## Simple TODO List app using a reducer, a context and a custom hook

This app provides a simple way to add, delete and toggle items in a todo list. It has be developed in React.js using functional components, a custom hook (useTodos) and reducer and a context:

- useTodos is a custom hook containing all data and handlers (action functions) to operate with the todo items
- todoReducer contains the dispatchement of the actions 
- TodoContext provides all data and functions from useTodos to avoid prp drilling between components

### Creating the project

yarn create vite // Creates a new Vite based React project
yarn // Install dependencies
yarn run dev // executes the project