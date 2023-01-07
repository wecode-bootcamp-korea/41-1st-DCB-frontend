import React from 'react';

import ContentsCart from './ContentsCart/ContentsCart';
import ContentsOrder from './ContentsOrder/ContentsOrder';

import './ContentsContainer.scss';

const ContentsContainer = ({
  cartItems,
  totalPrice,
  checkedItemHandler,
  allCheckedHandeler,
  isAllChecked,
  checkedItems,
}) => {
  return (
    <div className="contentsContainer">
      <ContentsCart
        cartItems={cartItems}
        totalPrice={totalPrice}
        checkedItemHandler={checkedItemHandler}
        allCheckedHandeler={allCheckedHandeler}
        isAllChecked={isAllChecked}
        checkedItems={checkedItems}
      />
      {/* <ContentsOrder /> */}
    </div>
  );
};

export default ContentsContainer;
