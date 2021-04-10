import React from 'react';

// React Stateless Functions perform better because they don't have the overhead of lifecycle methods
// and object setup etc. Use when you don't need state
const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
