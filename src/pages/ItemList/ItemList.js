import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from './components/Products';
import './itemList.scss';

const ItemLists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  const setOptionParams = e => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`http://152.67.208.118:3000/items?${searchParams.toString()}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItems(result.data);
        setTitle(result.data[0].category_name);
      });
  }, [searchParams]);

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
        <select className="selectList" onChange={setOptionParams}>
          <option value="new">최신순</option>
          <option value="cheap">가격 낮은 순</option>
          <option value="expensive">가격 높은 순</option>
        </select>
      </div>
      <Products items={items} />
    </div>
  );
};
export default ItemLists;
