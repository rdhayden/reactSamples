import React from 'react';

// React Stateless Functions perform better because they don't have the overhead of lifecycle methods
// and object setup etc. Use when you don't need state
const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);

export default Action;
