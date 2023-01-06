import React, { useState, useEffect } from 'react';

import CartTotal from './components/CartTotal/CartTotal';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';

import './Cart.scss';

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(new Set(checkedItems));
    }
  };

  // data
  const [cartItems, setCartItems] = useState([]);

  const filteredCheckedItems = cartItems.filter(item =>
    checkedItems.has(item.cartsId)
  );

  const totalPrice = filteredCheckedItems.reduce(
    (acc, cur) => acc + cur.cartsQuantity * cur.itemsPrice,
    0
  );

  // 전체선택 상태관리
  const [isAllChecked, setIsAllChecked] = useState(true);
  const allCheckedHandeler = isChecked => {
    console.log('isChecked :', isChecked);
    if (isChecked) {
      setCheckedItems(new Set(cartItems.map(item => item.cartsId)));
      setIsAllChecked(true);
    } else {
      setCheckedItems(new Set());
      setIsAllChecked(false);
    }
  };
  console.log('checkedItems :', checkedItems);

  useEffect(() => {
    fetch('data/cartItems.json')
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
      });
  }, []);

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
          />
          <CartTotal totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
export default Cart;
