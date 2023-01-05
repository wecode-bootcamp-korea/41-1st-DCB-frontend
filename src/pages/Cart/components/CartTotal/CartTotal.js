import React from 'react';

import './CartTotal.scss';

const CartTotal = () => {
  return (
    <div className="cartTotal">
      <div className="totalSummaryContainer">
        <div className="totalContainer">
          <div className="sumPriceWrap">
            <div className="title">합계</div>
            <div className="dataWrap">
              <span className="data">69,810</span>원
            </div>
          </div>
          <div className="discountWrap">
            <div className="title">할인금액</div>
            <div className="dataWrap">
              <span>-</span>
              <span className="data">0</span>원
            </div>
          </div>
          <div className="shippingWrap">
            <div className="title">배송비</div>
            <div className="dataWrap">
              <span className="data">3,000</span>원
            </div>
          </div>
        </div>
        <div className="paymentDueAmount">
          <div className="title">결제예정금액</div>
          <div className="dataWrap">
            <span className="data">72,810</span>원
          </div>
        </div>
      </div>
      <div className="buyButtonWrap">
        <button className="buyButton" disabled={false}>
          구매하기
        </button>
        <button className="buyButton" disabled={true}>
          상품을 담아주세요
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
