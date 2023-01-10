import React from 'react';
import CartItemWrap from '../components/CartItemWrap';
import './CartItemContainer.scss';

const CartItemContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  return (
    <div className="cartItemContainer">
      {cartItems.map(cartItem => (
        <CartItemWrap
          key={cartItem.cartItemId}
          cartItem={cartItem}
          totalPrice={totalPrice}
          checkedItemHandler={checkedItemHandler}
          checkedItems={checkedItems}
          setCartItems={setCartItems}
          cartItems={cartItems}
          setCheckedItems={setCheckedItems}
        />
      ))}
    </div>
  );
};

// const CartItemContainer = ({
//   cartItems,
//   totalPrice,
//   checkedItemHandler,
//   isAllChecked,
//   checkedItems,
// }) => {
//   return (
//     <div className="cartItemContainer">
//       {cartItems.map(cartItem => (
//         <CartItemWrap
//           key={cartItem.cartItemId}
//           cartItem={cartItem}
//           totalPrice={totalPrice}
//           checkedItemHandler={checkedItemHandler}
//           isAllChecked={isAllChecked}
//           checkedItems={checkedItems}
//         />
//       ))}
//     </div>
//   );
// };

export default CartItemContainer;
