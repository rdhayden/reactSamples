import React from 'react';

// React Stateless Functions perform better because they don't have the overhead of lifecycle methods
// and object setup etc. Use when you don't need state
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
