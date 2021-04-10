import React from 'react';

// React Stateless Functions perform better because they don't have the overhead of lifecycle methods
// and object setup etc. Use when you don't need state
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
// .defaultProps creates default props for a component if none are passed in
Header.defaultProps = {
  title: 'Indecision',
};

export default Header;
