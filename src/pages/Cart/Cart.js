import React from 'react';

import CartTotal from './components/CartTotal/CartTotal';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="sectionContainer">
          <ContentsContainer />
          <CartTotal />
        </div>
      </div>
    </div>
  );
};
export default Cart;
