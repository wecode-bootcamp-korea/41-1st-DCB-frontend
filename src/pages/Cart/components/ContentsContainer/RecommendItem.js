import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

const RecommendItem = ({ item }) => {
  return (
    <div className="recommendItem">
      <a href="">
        <img className="thumbnailImg" src={item.thumbnail} alt="" />
      </a>
      <div className="description">
        <div className="name">{item.product_name}</div>
        <div className="price">{item.price}원</div>
      </div>
    </div>
  );
};

export default RecommendItem;
