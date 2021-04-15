import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// description: "Gas bill", note: "", amount: 0, createdAt: 0}
// (expenses, { text, sortBy, startDate, endDate })

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
