import React, { useState } from 'react';
import './CartItemWrap.scss';

const CartItemWrap = ({
  cartItem,
  checkedItemHandler,
  checkedItems,
  setCartItems,
  cartItems,
  setCheckedItems,
}) => {
  const [checked, setChecked] = useState(false);

  const quantity = cartItem.cartQuantity;
  const isChecked = checkedItems.includes(cartItem.cartId);

  const toStrPrice = price => price.toLocaleString();
  const checkHandler = ({ target }) => {
    setChecked(!checked);
    checkedItemHandler(cartItem.cartId, target.checked);
  };
  const deleteHandler = () => {
    fetch(`http://152.67.208.118:3000/carts?cartId=${cartItem.cartId}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    });
    setCartItems(cartItems.filter(item => item.cartId !== cartItem.cartId));
    setCheckedItems(checkedItems.filter(cartId => cartId !== cartItem.cartId));
  };
  const quantityHandler = type => {
    if (quantity === 1 && type === 'minus') return;
    const count = type === 'plus' ? 1 : -1;

    fetch(`http://152.67.208.118:3000/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        quantity: `${quantity + count}`,
        cartId: `${cartItem.cartId}`,
      }),
    });
    setCartItems(
      cartItems.map(item =>
        item.cartItemId === cartItem.cartItemId &&
        item.optionDescription[0].option_id ===
          cartItem.optionDescription[0].option_id
          ? { ...item, cartQuantity: item.cartQuantity + count }
          : item
      )
    );
  };

  return (
    <div className="cartItemWrap">
      <input
        className="check"
        type="checkbox"
        checked={isChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="thumbnail">
        <a href="">
          <img
            className="thumbnailImg"
            src={cartItem.itemsThumbnail}
            alt={cartItem.itemsName}
          />
        </a>
      </div>
      <div className="prdboxWrap">
        <div className="wrap">
          <div className="prdName">{cartItem.itemsName}</div>
          {cartItem.optionDescription.map(option => (
            <div className="prdOption" key={cartItem.cartItemId}>
              {option.categoryName ? `${option.categoryName}:` : ` `}{' '}
              {option.content}
            </div>
          ))}
        </div>
        <div className="quantityPriceWrap">
          <div className="quantity">
            <button
              className="controlBtn"
              onClick={() => quantityHandler('minus')}
            >
              -
            </button>
            <input className="amount" type="text" value={quantity} size="2" />
            <button
              className="controlBtn"
              onClick={() => quantityHandler('plus')}
            >
              +
            </button>
          </div>
          <div className="priceDelWrap">
            <div className="price">
              {toStrPrice(parseInt(cartItem.itemsPrice) * quantity)}원
            </div>
            <button className="deleteBtn" onClick={deleteHandler}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemWrap;
