import React from 'react';

import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';

import './ContentsContainer.scss';

const ContentsContainer = ({ cartItems, totalPrice, checkedItemHandler }) => {
  const changeChecked = e => (e.target.checked = '');
  return (
    <div className="contentsContainer">
      <ContentsCart
        cartItems={cartItems}
        totalPrice={totalPrice}
        checkedItemHandler={checkedItemHandler}
      />
      <ContentsOrder />
    </div>
  );
};

export default ContentsContainer;
