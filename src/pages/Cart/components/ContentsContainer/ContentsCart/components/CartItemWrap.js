import React from 'react';

import './CartItemWrap.scss';

const CartItemWrap = () => {
  return (
    <div className="cartItemWrap">
      <input type="checkbox" className="check" />
      <div className="thumbnail">
        <a href="">
          <img
            className="thumbnailImg"
            src="https://www.wiselycompany.com/web/product/tiny/202212/417b79482396985d181c901fe9485504.png"
            alt="콜라겐"
          />
        </a>
      </div>
      <div className="prdboxWrap">
        <div className="prdName">콜라겐·히알루론산</div>
        <div className="quantityPriceWrap">
          <div className="quantity">
            <button className="controlBtn">-</button>
            <input className="amount" type="text" value="5" size="2" />
            <button className="controlBtn">+</button>
          </div>
          <div className="priceDelWrap">
            <div className="price">9,790(단가)원</div>
            <button className="deleteBtn">x</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemWrap;
