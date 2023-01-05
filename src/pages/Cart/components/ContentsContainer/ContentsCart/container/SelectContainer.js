import React from 'react';

import './SelectContainer.scss';

const SelectContainer = ({ cartItems }) => {
  const cartItemsLength = cartItems.length;
  return (
    <div className="selectContainer">
      <input className="checkAll" type="checkbox" checked="false" />
      <div className="selectAll">전체선택(0/{cartItemsLength})</div>
      <button className="selectedDelete">선택삭제</button>
    </div>
  );
};

export default SelectContainer;
