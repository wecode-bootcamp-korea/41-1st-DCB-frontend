import React, { useEffect, useState } from 'react';
import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';
import RecommendItem from './RecommendItem';
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
  const [recommendItems, setRecommendItems] = useState([]);
  const [randomIndexes, setRandomIndexes] = useState([]);

  const makeRandomIndexes = () => {
    let randomIndexes = [];
    let i = 0;
    while (i < 4) {
      let n = Math.floor(Math.random() * 11) + 0;
      if (notSame(n)) {
        randomIndexes.push(n);
        i++;
      }
    }
    function notSame(n) {
      return randomIndexes.every(e => n !== e);
    }
    return randomIndexes;
  };

  useEffect(() => {
    setRandomIndexes(makeRandomIndexes());
  }, []);

  useEffect(() => {
    fetch('/data/recommend.json')
      .then(res => res.json())
      .then(data => setRecommendItems(data));
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
          {recommendItems
            .filter((item, idx) => randomIndexes.includes(idx))
            .map(item => (
              <RecommendItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContentsContainer;
