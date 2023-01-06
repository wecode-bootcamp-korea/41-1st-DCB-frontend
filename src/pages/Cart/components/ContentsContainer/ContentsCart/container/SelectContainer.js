import React from 'react';

import './SelectContainer.scss';

const SelectContainer = ({ cartItems, isAllChecked, allCheckedHandeler }) => {
  const cartItemsLength = cartItems.length;

  const checkHandler = ({ target }) => {
    allCheckedHandeler(target.checked); //true or false
  };

  return (
    <div className="selectContainer">
      <input
        className="checkAll"
        type="checkbox"
        checked={isAllChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="selectAll">전체선택(0/{cartItemsLength})</div>
      <button className="selectedDelete">선택삭제</button>
    </div>
  );
};

export default SelectContainer;
