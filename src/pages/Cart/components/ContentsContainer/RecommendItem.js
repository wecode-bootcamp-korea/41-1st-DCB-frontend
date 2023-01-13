import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendItem.scss';

const RecommendItem = ({ item }) => {
  const navigate = useNavigate();
  const toStrPrice = price => price.toLocaleString();
  const handleClickItem = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <div className="recommendItem" onClick={handleClickItem}>
      <div className="img">
        <img className="thumbnailImg" src={item.thumbnail} alt="" />
      </div>
      <div className="description">
        <div className="name">{item.product_name}</div>
        <div className="price">{toStrPrice(parseInt(item.price))}원</div>
      </div>
    </div>
  );
};

export default RecommendItem;
