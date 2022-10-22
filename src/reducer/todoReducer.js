export const todoReducer = (state = initialState, action = {}) => {
  // Main reducer
  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload];

    case '[TODO] remove todo':
      return state.filter((todo) => todo.id !== action.payload);

    case '[TODO] toggle todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
