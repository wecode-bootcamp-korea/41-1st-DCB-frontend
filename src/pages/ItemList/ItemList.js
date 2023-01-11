import React, { useState, useEffect } from 'react';
import { Products } from './components/Products';
import API from '../../config';
import './itemList.scss';

const ItemLists = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${API.items}`)
      .then(res => res.json())
      .then(result => setItems(result));
  }, []);
  return (
    <div className="itemList">
      <img src="./images/banner_1.jpg" className="adBanner" alt="광고배너" />
      <div className="titleArea">제목제목</div>
      <div className="sort">
        <p>총 {items.length}개</p>
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
