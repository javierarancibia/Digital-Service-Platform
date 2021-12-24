import React from 'react';

const Items = (props) => {
  const serviceDetails = [
    {
      serviceId: 1,
      serviceType: 'Individual',
      price: 4150,
    },
    {
      serviceId: 1,
      serviceType: 'Duo',
      price: 5220,
    },
    {
      serviceId: 1,
      serviceType: 'Familiar',
      price: 6290,
    },
    {
      serviceId: 1,
      serviceType: 'Universitario',
      price: 2130,
    },
    {
      serviceId: 2,
      serviceType: 'Basico',
      price: 5490,
    },
    {
      serviceId: 2,
      serviceType: 'Estandar',
      price: 8320,
    },
    {
      serviceId: 2,
      serviceType: 'Premium',
      price: 10700,
    },
    {
      serviceId: 3,
      serviceType: 'Simple',
      price: 6500,
    },
    {
      serviceId: 3,
      serviceType: 'Combo Disney Plus + Star Plus',
      price: 10500,
    },
    {
      serviceId: 4,
      serviceType: 'Simple',
      price: 4165,
    },
    {
      serviceId: 5,
      serviceType: 'Móvil',
      price: 4900,
    },
    {
      serviceId: 5,
      serviceType: 'Estándar',
      price: 6900,
    },
  ];

  const filteredItems = serviceDetails.filter(
    (item) => item.serviceId === props.id
  );
  return (
    <div>
      {filteredItems.map((item) => (
        <div>
          <h4>{item.serviceType}</h4>
          <h5>${item.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default Items;
