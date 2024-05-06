import React from 'react';

const Button = ({click, image, name, imageName}) => (
  <div className={name}>
    <img className={imageName}
      src={image}
      onClick={click}
    />
  </div>
);

export default Button;