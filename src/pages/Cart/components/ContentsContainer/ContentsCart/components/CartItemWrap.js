import React, { useState, useEffect } from 'react';

import './CartItemWrap.scss';

const CartItemWrap = ({ cartItem, checkedItemHandler, isAllChecked }) => {
  const [bChecked, setChecked] = useState(false);
  const [count, setCount] = useState(cartItem.cQuantity);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(cartItem.cId, target.checked);
  };

  const price = parseInt(cartItem.iPrice) * cartItem.cQuantity;
  const toStrPrice = price => price.toLocaleString();

  useEffect(() => setChecked(isAllChecked), [isAllChecked]);

  const quantityHandler = type => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div className="cartItemWrap">
      <input
        className="check"
        type="checkbox"
        checked={bChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="thumbnail">
        <a href="">
          <img
            className="thumbnailImg"
            src={cartItem.iThumbnail}
            alt={cartItem.iName}
          />
        </a>
      </div>
      <div className="prdboxWrap">
        <div className="wrap">
          <div className="prdName">{cartItem.iName}</div>
          <div className="prdOption">{cartItem.iName}</div>
        </div>
        <div className="quantityPriceWrap">
          <div className="quantity">
            <button
              className="controlBtn"
              onClick={() => quantityHandler('minus')}
            >
              -
            </button>
            <input className="amount" type="text" value={count} size="2" />
            <button
              className="controlBtn"
              onClick={() => quantityHandler('plus')}
            >
              +
            </button>
          </div>
          <div className="priceDelWrap">
            <div className="price">{toStrPrice(price)}원</div>
            <button className="deleteBtn">x</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemWrap;
