import React, { useState, useEffect } from 'react';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';
import CartTotal from './components/CartTotal/CartTotal';
import './Cart.scss';

const Cart = () => {
  console.log('===================Render===================');
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  console.log('cartItems :', cartItems);
  console.log('checkedItems :', checkedItems);

  const allCheckedHandler =
    cartItems.length === checkedItems.length && cartItems.length;

  const checkedItemHandler = (id, isChecked) => {
    console.log('cartId :', id);
    if (isChecked) {
      setCheckedItems(prev => [...prev, id]);
    } else {
      setCheckedItems(prev => prev.filter(item => item !== id));
    }
  };

  useEffect(() => {
    fetch('http://152.67.208.118:3000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then(response => response.json())
      .then(cart => {
        setCartItems(cart.data);
        setCheckedItems(cart.data.map(item => item.cartId));
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
          <CartTotal
            cartItems={cartItems}
            checkedItems={checkedItems}
            setCartItems={setCartItems}
            setCheckedItems={setCheckedItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
