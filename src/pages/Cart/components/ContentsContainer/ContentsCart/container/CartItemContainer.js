import React, { useState, useEffect } from 'react';

import CartItemWrap from '../components/CartItemWrap';

import './CartItemContainer.scss';

const CartItemContainer = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    fetch('data/car.json')
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  return (
    <div className="cartItemContainer">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, idx) => (
        <CartItemWrap key={idx} />
      ))}
    </div>
  );
};

export default CartItemContainer;
