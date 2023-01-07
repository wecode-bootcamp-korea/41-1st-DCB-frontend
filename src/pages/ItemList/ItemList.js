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
      <div className="adBanner">
        <span>Let's go Camping!</span>
        <img
          src="./images/오른쪽.png"
          alt="다람쥐"
          className="bannerImgRight"
        />
      </div>
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
