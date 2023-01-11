import React from 'react';
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
          <div className="recommendListItem">
            <a href="">
              <img
                className="thumbnailImg"
                src={
                  JSON.parse(localStorage.getItem('cartsLocalStorage'))[0]
                    .itemsThumbnail
                }
                alt=""
              />
            </a>
            <div className="description">
              <div className="name">히알루론산 수분 크림 80mL</div>
              <div className="price">8,890원</div>
            </div>
          </div>
          <div className="recommendListItem">
            <a href="">
              <img
                className="thumbnailImg"
                src={
                  JSON.parse(localStorage.getItem('cartsLocalStorage'))[1]
                    .itemsThumbnail
                }
                alt=""
              />
            </a>
            <div className="description">
              <div className="name">탈모 케어 샴푸 500mL</div>
              <div className="price">5,890원</div>
            </div>
          </div>
          <div className="recommendListItem">
            <a href="">
              <img
                className="thumbnailImg"
                src={
                  JSON.parse(localStorage.getItem('cartsLocalStorage'))[2]
                    .itemsThumbnail
                }
                alt=""
              />
            </a>
            <div className="description">
              <div className="name">활력충전 멀티비타민</div>
              <div className="price">4,690원</div>
            </div>
          </div>
          <div className="recommendListItem">
            <a href="">
              <img
                className="thumbnailImg"
                src={
                  JSON.parse(localStorage.getItem('cartsLocalStorage'))[3]
                    .itemsThumbnail
                }
                alt=""
              />
            </a>
            <div className="description">
              <div className="name">히알루론산 수분 세럼 80mL</div>
              <div className="price">5,890원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsContainer;
