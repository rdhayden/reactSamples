const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]; // spread operator ... returns the values in the subsequent array
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense, // spread (expand to) all propoerties of the expense
            ...action.updates, // spread (expand) all those provided in the updates to overide the equivalents in the original expense
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
