import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; //all browsers start with thier own default styles, set all to the same base before styling
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 4500,
    note: 'A water bill',
    createdAt: 500,
  })
);
store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 0,
    note: 'A gas bill',
    createdAt: 1000,
  })
);
store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 109500,
    note: 'the rent',
    createdAt: 1,
  })
);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

// Provider makes the store available to all contained components
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
