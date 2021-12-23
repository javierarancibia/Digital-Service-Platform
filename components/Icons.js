import React from 'react';

const Icons = (props) => {
  return (
    <div>
      {props.icons.map((item) => (
        <h3>{item.name}</h3>
      ))}
    </div>
  );
};

export default Icons;
