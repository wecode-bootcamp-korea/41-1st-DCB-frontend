import React, { useEffect, useState } from 'react';
import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';

import './ContentsContainer.scss';

const ContentsContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('/data/recommend.json')
      .then(res => res.json())
      .then(data => setCarts(data));
  }, []);

  return (
    <div className="contentsContainer">
      <ContentsCart
        cartItems={cartItems}
        totalPrice={totalPrice}
        checkedItemHandler={checkedItemHandler}
        allCheckedHandler={allCheckedHandler}
        checkedItems={checkedItems}
        setCartItems={setCartItems}
        setCheckedItems={setCheckedItems}
      />
      {/* <ContentsOrder /> */}
      <div className="recommend">
        <h2 className="recommendTitle">다른 고객이 함께 구매한 제품</h2>
        <div className="recommendList">
          {carts.map(item => {
            return (
              <div className="recommendListItem" key={item.cartItemId}>
                <a href="">
                  <img
                    className="thumbnailImg"
                    src={item.itemsThumbnail}
                    alt=""
                  />
                </a>
                <div className="description">
                  <div className="name">{item.itemsName}</div>
                  <div className="price">{item.itemsPrice}원</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentsContainer;
