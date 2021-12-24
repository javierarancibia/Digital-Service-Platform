import React from 'react';
import Icons from './Icons';

const IconsComponent = () => {
  const icons = [
    {
      id: 1,
      name: 'Spotify',
      logo: 'image.jpg',
    },
    {
      id: 2,
      name: 'Netflix',
      logo: 'image.jpg',
    },
    {
      id: 3,
      name: 'Disney Plus',
      logo: 'image.jpg',
    },
    {
      id: 4,
      name: 'Amazon Prime',
      logo: 'image.jpg',
    },
    {
      id: 5,
      name: 'HBO MAX',
      logo: 'image.jpg',
    },
  ];
  return (
    <div>
      <Icons icons={icons} />
    </div>
  );
};

export default IconsComponent;
