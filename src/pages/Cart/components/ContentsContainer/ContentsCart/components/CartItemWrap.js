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
  console.log('cartItem :', cartItem);
  const [checked, setChecked] = useState(false);

  const quantity = cartItem.cartQuantity;
  const isChecked = checkedItems.includes(cartItem.cartItemId);

  const toStrPrice = price => price.toLocaleString();
  const checkHandler = ({ target }) => {
    setChecked(!checked);
    checkedItemHandler(cartItem.cartItemId, target.checked);
  };
  const deleteHandler = () => {
    fetch(`http://10.58.52.240:3000/carts?itemId=${cartItem.cartItemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setCartItems(
      cartItems.filter(item => item.cartItemId !== cartItem.cartItemId)
    );
    setCheckedItems(
      checkedItems.filter(itemId => itemId !== cartItem.cartItemId)
    );
  };
  const quantityHandler = type => {
    if (quantity === 1 && type === 'minus') return;
    const count = type === 'plus' ? 1 : -1;

    fetch(`http://10.58.52.240:3000/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: `${quantity + count}`,
        itemId: `${cartItem.cartItemId}`,
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
              {option.categoryName}: {option.content}
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
