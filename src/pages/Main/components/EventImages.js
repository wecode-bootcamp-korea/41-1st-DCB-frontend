import React from 'react';
import '../main.scss';

export const EventImages = ({ src, alt }) => {
  return (
    <div className="imageContainer">
      <img src={src} alt={alt} />
    </div>
  );
};
