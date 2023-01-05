import React from 'react';
import '../components/TotalInfo.scss';
import { useState } from 'react';
import ProductDescription from './ProductDescription';
import Review from './Review';
import MoreInformation from './MoreInformation';
import { Link } from 'react-router-dom';

const TotalInfo = () => {
  // const [productDetailClick, setproductDetailClick] = useState(
  //   <ProductDescription />
  // );

  // const changer = e => {
  //   e.preventDefault();
  //   setproductDetailClick();
  // };
  const [state, setstate] = useState(0);

  function tab0() {
    setstate(0);
  }
  function tab1() {
    setstate(1);
  }
  function tab2() {
    setstate(2);
  }

  return (
    <div className="detailTab">
      <ul className="DetailedInformation">
        <li className="productInfo" onClick={tab0}>
          <div className="productInfoDetail">상품설명</div>
        </li>
        <li className="review" onClick={tab1}>
          <div className="reviewDetail">후기</div>
        </li>
        <li className="productDetailInfo" onClick={tab2}>
          <div className="productDetailInfomation">상세정보</div>
        </li>
        {state == 0 && <ProductDescription />}
        {state == 1 && <Review />}
        {state == 2 && <MoreInformation />}
      </ul>
    </div>
  );
};
export default TotalInfo;
