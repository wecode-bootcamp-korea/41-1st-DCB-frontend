import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../../../../config';
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

  const navigate = useNavigate();
  const toStrPrice = price => price.toLocaleString();
  const checkHandler = ({ target }) => {
    setChecked(!checked);
    checkedItemHandler(cartItem.cartId, target.checked);
  };
  const deleteHandler = () => {
    fetch(`${API.cart}?cartId=${cartItem.cartId}`, {
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

    fetch(`${API.cart}`, {
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

  const handleClickItem = () => {
    navigate(`/details/${cartItem.cartItemId}`);
  };

  return (
    <div className="cartItemWrap">
      <input
        className="check"
        type="checkbox"
        checked={isChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="thumbnail" onClick={handleClickItem}>
        <img
          className="thumbnailImg"
          src={cartItem.itemsThumbnail}
          alt={cartItem.itemsName}
        />
      </div>
      <div className="prdboxWrap">
        <div className="wrap" onClick={handleClickItem}>
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
