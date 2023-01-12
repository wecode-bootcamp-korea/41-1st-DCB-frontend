import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import Review from './Review';
import MoreInformation from './MoreInformation';
import '../components/TotalInfo.scss';

const TotalInfo = () => {
  const [currentTap, setCurrentTap] = useState(0);

  return (
    <div className="detailTab">
      <ul className="detailedInformation">
        {TAP_LIST.map(list => {
          return (
            <li
              key={list.id}
              className="productInfo"
              onClick={() => setCurrentTap(list.id)}
            >
              <div className="productInfoDetail">{list.title}</div>
            </li>
          );
        })}
        {TAP_LIST[currentTap].component}
      </ul>
    </div>
  );
};

export default TotalInfo;
const TAP_LIST = [
  { id: 0, title: '상품설명', component: <ProductDescription /> },
  { id: 1, title: '후기', component: <Review /> },
  { id: 2, title: '상세정보', component: <MoreInformation /> },
];
