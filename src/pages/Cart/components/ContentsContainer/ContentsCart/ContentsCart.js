import React from 'react';
import SelectContainer from './container/SelectContainer';
import CartItemContainer from './container/CartItemContainer';

import './ContentsCart.scss';

const ContentsCart = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  return (
    <div className="contentsCart">
      <h2 className="title">장바구니</h2>
      <SelectContainer
        cartItems={cartItems}
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        setCartItems={setCartItems}
        setCheckedItems={setCheckedItems}
      />
      <div className="containerContainer">
        {cartItems.length ? (
          <CartItemContainer
            cartItems={cartItems}
            totalPrice={totalPrice}
            checkedItemHandler={checkedItemHandler}
            checkedItems={checkedItems}
            setCartItems={setCartItems}
            setCheckedItems={setCheckedItems}
          />
        ) : (
          <p className="message">장바구니에 담긴 상품이 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default ContentsCart;
