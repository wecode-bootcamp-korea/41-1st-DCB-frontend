import React from 'react';
import './ContentsOrder.scss';

const ContentsOrder = () => {
  return (
    <div className="contentsOrder">
      <h2 className="title">주문서</h2>
      <div className="billingInfo">
        <div>주문자 정보</div>
        <div>
          <div>주문자 이름 이세윤</div>
          <div>휴대폰 번호 010 1234 1234</div>
          <div>이메일 asdlfj@asndfl.com</div>
          <div />
        </div>
      </div>
      <div className="shippingInfo">배송 정보</div>
      <div className="discountInfo">쿠폰/적립금</div>
      <div className="paymethod">결제수단</div>
    </div>
  );
};

export default ContentsOrder;
