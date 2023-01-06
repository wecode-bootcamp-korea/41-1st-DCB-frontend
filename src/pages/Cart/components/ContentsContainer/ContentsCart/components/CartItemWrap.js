import React, { useState, useEffect } from 'react';

import './CartItemWrap.scss';

const CartItemWrap = ({ cartItem, checkedItemHandler, isAllChecked }) => {
  const [bChecked, setChecked] = useState(false);
  // console.log(bChecked);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(cartItem.cartsId, target.checked);
  };

  const price = cartItem.itemsPrice * cartItem.cartsQuantity;
  const toStrPrice = price => price.toLocaleString();

  useEffect(() => setChecked(isAllChecked), [isAllChecked]);

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
            src={cartItem.itemsThumbnail}
            alt={cartItem.itemsName}
          />
        </a>
      </div>
      <div className="prdboxWrap">
        <div className="prdName">{cartItem.itemsName}</div>
        <div className="quantityPriceWrap">
          <div className="quantity">
            <button className="controlBtn">-</button>
            <input
              className="amount"
              type="text"
              value={cartItem.cartsQuantity}
              size="2"
            />
            <button className="controlBtn">+</button>
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
