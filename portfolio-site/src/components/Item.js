import React from 'react';

const Item = (props) => {
  const id = props.match.params.id;
  return <div>Item {id}</div>;
};

export default Item;
