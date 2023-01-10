import React from 'react';

import SelectContainer from './container/SelectContainer';
import CartItemContainer from './container/CartItemContainer';

import './ContentsCart.scss';

const ContentsCart = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandler,
  isAllChecked,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  return (
    <div className="contentsCart">
      <h2 className="title">장바구니</h2>
      <SelectContainer
        cartItems={cartItems}
        isAllChecked={isAllChecked}
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        setCartItems={setCartItems}
        setCheckedItems={setCheckedItems}
      />
      {cartItems.length ? (
        <CartItemContainer
          cartItems={cartItems}
          totalPrice={totalPrice}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
          checkedItems={checkedItems}
        />
      ) : (
        <p className="message">장바구니에 담긴 상품이 없습니다</p>
      )}
    </div>
  );
};

export default ContentsCart;
