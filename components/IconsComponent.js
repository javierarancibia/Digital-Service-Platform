import React from 'react';
import Icons from './Icons';

const IconsComponent = () => {
  const icons = [
    {
      id: 1,
      name: 'Spotify',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
      id: 2,
      name: 'Netflix',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
      id: 3,
      name: 'Disney Plus',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
      id: 4,
      name: 'Amazon Prime',
      logo: 'image.jpg',
      price: '$5.000',
    },
  ];
  return (
    <div>
      <Icons icons={icons} />
    </div>
  );
};

export default IconsComponent;
