import React from 'react';

import CartItemWrap from '../components/CartItemWrap';

import './CartItemContainer.scss';

const CartItemContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  isAllChecked,
}) => {
  return (
    <div className="cartItemContainer">
      {cartItems.map(cartItem => (
        <CartItemWrap
          key={cartItem.cartsId}
          cartItem={cartItem}
          totalPrice={totalPrice}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
        />
      ))}
    </div>
  );
};

export default CartItemContainer;
