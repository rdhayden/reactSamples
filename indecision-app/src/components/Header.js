import React from 'react';

// React Stateless Functions perform better because they don't have the overhead of lifecycle methods
// and object setup etc. Use when you don't need state
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);
// .defaultProps creates default props for a component if none are passed in
Header.defaultProps = {
  title: 'Indecision',
};

export default Header;
