import React from 'react';

import SelectContainer from './container/SelectContainer';
import CartItemContainer from './container/CartItemContainer';

import './ContentsCart.scss';

const ContentsCart = () => {
  return (
    <div className="contentsCart">
      <h2 className="title">장바구니</h2>
      <SelectContainer />
      <CartItemContainer />
      <p className="message">장바구니에 담긴 상품이 없습니다</p>
    </div>
  );
};

export default ContentsCart;
