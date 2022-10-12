export const todoReducer = (state = initialState, action = {}) => {
  // Main reducer
  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload];

    case '[TODO] remove todo':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};
