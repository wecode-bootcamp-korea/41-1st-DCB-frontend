import React, { useState, useEffect } from 'react';

import CartTotal from './components/CartTotal/CartTotal';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';

import './Cart.scss';

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());
  console.log(checkedItems);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(new Set(checkedItems));
    }
  };

  const [cartItems, setCartItems] = useState([]);

  const filteredCheckedItems = cartItems.filter(item =>
    checkedItems.has(item.cartsId)
  );
  console.log('filtered :', filteredCheckedItems);

  const totalPrice = filteredCheckedItems.reduce(
    (acc, cur) => acc + cur.cartsQuantity * cur.itemsPrice,
    0
  );
  console.log(totalPrice);

  useEffect(() => {
    fetch('data/cartItems.json')
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="sectionContainer">
          <ContentsContainer
            totalPrice={totalPrice}
            cartItems={cartItems}
            checkedItemHandler={checkedItemHandler}
          />
          <CartTotal totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
export default Cart;
