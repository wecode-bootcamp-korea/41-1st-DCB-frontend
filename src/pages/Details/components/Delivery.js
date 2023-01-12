import React from 'react';

const Delivery = () => {
  return (
    <ul className="infoDelivery">
      <li> - 배송 방법 : HY 프레딧 배송, 택배 배송 </li>
      <li>
        - 배송 지역 : 전국 <li />
        <li> - 배송 비용 : 3,000원 </li>
        <li>- 제주 및 도서산간 추가 배송비 : 3,000원 </li>
        <li>
          - 배송 예정일 : 평일 기준 출고 후 1~2일 소요 (관할 지역 택배사 사정에
          따라 추가 소요될 수 있음)
        </li>
        <li>
          - 천재지변, 물량 급증, 수급 변동 등 예외적인 사유 발생 시, 배송이
          지연될 수 있는 점 양해 부탁드립니다.
        </li>
        <li> - 군부대 일부와 해외의 경우 배송이 어려울 수 있습니다 </li>
        <li>- 평일 낮 12시 이전 결제 시 : 당일 출고 (주말 및 공휴일 제외)</li>
        -&nbsp;평일&nbsp;낮&nbsp;12시&nbsp;이후&nbsp;결제&nbsp;시&nbsp;:&nbsp;다음날&nbsp;출고&nbsp;(주말&nbsp;및&nbsp;공휴일&nbsp;제외)
      </li>
    </ul>
  );
};
export default Delivery;
