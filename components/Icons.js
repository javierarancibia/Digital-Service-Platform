import React, { useState } from 'react';
import Items from './Items';

const Icons = (props) => {
  const [serviceId, setServiceId] = useState([]);

  const onHandleId = (itemId) => {
    setServiceId(itemId);
  };
  return (
    <div>
      {props.icons.map((item) => (
        <button id={item.id} onClick={() => onHandleId(item.id)}>
          {item.name}
        </button>
      ))}
      <Items id={serviceId} />
    </div>
  );
};

export default Icons;
