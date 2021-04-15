// setTextFilter Action
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// sortByAmount Action
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// sortByDate Action
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// setStartDate Action
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// setEndDate Action
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
