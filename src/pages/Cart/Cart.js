import React, { useState, useEffect } from 'react';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';
import CartTotal from './components/CartTotal/CartTotal';
import './Cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const allCheckedHandler =
    cartItems.length === checkedItems.length && cartItems.length;

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems(prev => [...prev, id]);
    } else {
      setCheckedItems(prev => prev.filter(item => item !== id));
    }
  };

  useEffect(() => {
    fetch('data/cartItems.json')
      .then(response => response.json())
      .then(cart => {
        setCartItems(cart);
        setCheckedItems(cart.map(item => item.cartItemId));
      });
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="sectionContainer">
          <ContentsContainer
            cartItems={cartItems}
            checkedItemHandler={checkedItemHandler}
            allCheckedHandler={allCheckedHandler}
            checkedItems={checkedItems}
            setCartItems={setCartItems}
            setCheckedItems={setCheckedItems}
          />
          <CartTotal cartItems={cartItems} checkedItems={checkedItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI'
);
