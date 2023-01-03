import React, { useState, useEffect } from 'react';
import { Products } from './components/Products';
import './itemList.scss';

const ItemLists = () => {
  const [mock, setMock] = useState([]);
  useEffect(() => {
    fetch('data/selectedItems.json')
      .then(res => res.json())
      .then(result => setMock(result));
  }, []);
  return (
    <div className="itemList">
      <div className="adBanner" />
      <div className="titleArea">제목제목</div>
      <div className="sort">
        <p>총 {mock.length}개</p>
        <select className="selectList">
          <option>최신순</option>
          <option>가격 낮은 순</option>
          <option>가격 높은 순</option>
        </select>
      </div>
      <Products />
    </div>
  );
};
export default ItemLists;
