import React, { useState, useEffect } from 'react';

import CartTotal from './components/CartTotal/CartTotal';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';

import './Cart.scss';

const Cart = () => {
  const token = (() => {
    localStorage.setItem(
      'Token',
      'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI'
    );
    return localStorage.getItem('Token');
  })();

  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  // const [isAllChecked, setIsAllChecked] = useState(true);

  console.log('cartItems :', cartItems);
  console.log('cartItems.length :', cartItems.length);
  console.log('checkedItems.size : ', checkedItems.size);
  console.log('cartItems.length :', cartItems.length);
  const isAllChecked =
    cartItems.length === checkedItems.size && cartItems.length > 0;
  console.log('isAllChecked :', isAllChecked);
  const filteredCheckedItems = cartItems.filter(item => {
    return checkedItems.has(item.cartItemId);
  });
  const totalPrice = filteredCheckedItems.reduce(
    (acc, cur) => acc + cur.cartQuantity * parseInt(cur.itemsPrice),
    0
  );

  useEffect(() => {
    // fetch('data/cartItems.json');
    fetch('http://10.58.52.240:3000/cart', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(cart => {
        setCartItems(cart.data);
        setCheckedItems(new Set(cart.data.map(item => item.cartItemId)));
      });
  }, []);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(new Set(checkedItems));
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(new Set(checkedItems));
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(cartItems.map(item => item.cartItemId)));
      // isAllChecked = true;
    } else {
      setCheckedItems(new Set());
      // isAllChecked = false;
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
            allCheckedHandler={allCheckedHandler}
            isAllChecked={isAllChecked}
            checkedItems={checkedItems}
            setCartItems={setCartItems}
            setCheckedItems={setCheckedItems}
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

// useEffect(() => {
//   // 체크된 아이템 리스트의 길이와 카트 리스트의 길이 비교
//   // 체크된 아이템 리스트의 길이가 카트 리스트의 길이보다 작으면 setIsAllChecked(false)
//   // 아니면 setIsAllChecked(true)
//   // if (checkedItems.size < cartItems.length) setIsAllChecked(false);
//   // else setIsAllChecked(true);
// }, [checkedItems]);
