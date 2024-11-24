import React, { JSX } from 'react';

interface SocialmediaProps {
  img: JSX.Element;
  isRounded : boolean;
  iconSize?: number; 
}

const Socialmedia: React.FC<SocialmediaProps> = ({ img , isRounded  , iconSize  }) => {

  const Icon = React.cloneElement(img, {
    style: { width: iconSize, height: iconSize },
  });
  return (
    <div className={ `${
      isRounded ? 'gradient-l rounded-full w-10 h-10' : ''
    } flex cursor-pointer items-center justify-center text-white
      `}>
      {Icon}
    </div>
  );
};

export default Socialmedia;