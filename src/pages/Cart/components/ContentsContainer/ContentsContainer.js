import React from 'react';

import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';

import './ContentsContainer.scss';

const ContentsContainer = () => {
  return (
    <div className="contentsContainer">
      <ContentsCart />
      <ContentsOrder />
    </div>
  );
};

export default ContentsContainer;
