import React from 'react';
import Icons from './Icons';

const IconsComponent = () => {
  const icons = [
    {
      name: 'Spotify',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
      name: 'Netflix',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
      name: 'Disney Plus',
      logo: 'image.jpg',
      price: '$5.000',
    },
    {
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
