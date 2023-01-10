import React from 'react';

import CartItemWrap from '../components/CartItemWrap';

import './CartItemContainer.scss';

const CartItemContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  isAllChecked,
  checkedItems,
}) => {
  return (
    <div className="cartItemContainer">
      {cartItems.map(cartItem => (
        <CartItemWrap
          key={cartItem.cartItemId}
          cartItem={cartItem}
          totalPrice={totalPrice}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
          checkedItems={checkedItems}
        />
      ))}
    </div>
  );
};

export default CartItemContainer;
