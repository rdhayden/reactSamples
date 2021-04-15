import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check sif it renders correctly before submit creates an error
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly after creating the error
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly before input change
  const description = 'Some description';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: description } });
  expect(wrapper.state('description')).toBe(description);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly after the input change
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly before textarea change
  const text = 'Some text';
  wrapper.find('textarea').simulate('change', { target: { value: text } });
  expect(wrapper.state('note')).toBe(text);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly after the textarea change
});

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly before input change
  const amount = '23.50';
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: amount } });
  expect(wrapper.state('amount')).toBe(amount);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly after the input change
});

test('should not set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly before input change
  const amount = '12.122';
  const originalAmount = wrapper.state('amount');
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: amount } });
  expect(wrapper.state('amount')).toBe(originalAmount);
  expect(wrapper).toMatchSnapshot(); // check if it renders correctly after the input change
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = !wrapper.state('calenderFocused');
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calenderFocused')).toBe(focused);
});
