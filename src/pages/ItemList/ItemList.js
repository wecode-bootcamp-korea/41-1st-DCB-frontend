import React, { useState, useEffect } from 'react';
import { Products } from './components/Products';
import './itemList.scss';

const ItemLists = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('http://152.67.208.118:3000/itemsFetch/?page=1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItems(result.data);
        setTitle(result.data[0].category_name);
      });
  }, []);

  return (
    <div className="itemList">
      <img src="./images/banner_1.jpg" className="adBanner" alt="광고배너" />
      <div className="titleArea">{title}</div>
      <div className="sort">
        <p>총 {items.length}개</p>
        <select className="selectList">
          <option>최신순</option>
          <option>가격 낮은 순</option>
          <option>가격 높은 순</option>
        </select>
      </div>
      <Products items={items} />
    </div>
  );
};
export default ItemLists;
