import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Products } from './components/Products';
import { API } from '../../config';
import './itemList.scss';

const ItemLists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  const setOptionParams = e => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`${API.items}/?${searchParams.toString()}`)
      .then(res => res.json())
      .then(result => {
        setCategoryId(searchParams.get('category'));
        setItems(result.data);
        setTitle(
          categoryId == 0 ? '전체보기' : result.data[0].product_category
        );
      });
  }, [searchParams, categoryId]);

  return (
    <div className="itemList">
      <div className="adBanner">
        <span>Go Camping!</span>
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
