import React from 'react';

import './SelectContainer.scss';

const SelectContainer = ({
  cartItems,
  isAllChecked,
  allCheckedHandeler,
  checkedItems,
  setCartItems,
}) => {
  // console.log(checkedItems);
  const cartItemsLength = cartItems.length;

  const checkHandler = ({ target }) => {
    allCheckedHandeler(target.checked); //true or false
  };

  const selectedDelete = () => {
    console.log('cartItems :', cartItems);
    console.log('checkedItems :', checkedItems);
    setCartItems(cartItems.filter(item => !checkedItems.has(item.cId)));
  };

  return (
    <div className="selectContainer">
      <input
        className="checkAll"
        type="checkbox"
        checked={isAllChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="selectAll">
        전체선택({checkedItems.size}/{cartItemsLength})
      </div>
      <button className="selectedDelete" type="button" onClick={selectedDelete}>
        선택삭제
      </button>
    </div>
  );
};

export default SelectContainer;
