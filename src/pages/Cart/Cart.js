import React, { useState, useEffect } from 'react';

import CartTotal from './components/CartTotal/CartTotal';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';

import './Cart.scss';

const Cart = () => {
  console.log('render!');
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(true);

  useEffect(() => {
    console.log('fetch');
    fetch('data/cartItems.json')
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
        setCheckedItems(new Set(data.map(item => item.cId)));
      });
  }, []);

  const filteredCheckedItems = cartItems.filter(item => {
    return checkedItems.has(item.cId);
  });
  const totalPrice = filteredCheckedItems.reduce(
    (acc, cur) => acc + cur.cQuantity * parseInt(cur.iPrice),
    0
  );

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(new Set(checkedItems));
    }
  };

  const allCheckedHandeler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(cartItems.map(item => item.cId)));
      setIsAllChecked(true);
    } else {
      setCheckedItems(new Set());
      setIsAllChecked(false);
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="sectionContainer">
          <ContentsContainer
            totalPrice={totalPrice}
            cartItems={cartItems}
            checkedItemHandler={checkedItemHandler}
            allCheckedHandeler={allCheckedHandeler}
            isAllChecked={isAllChecked}
            checkedItems={checkedItems}
          />
          <CartTotal
            totalPrice={totalPrice}
            cartItems={cartItems}
            checkedItems={checkedItems}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;
