import React from 'react';

import './SelectContainer.scss';

const SelectContainer = ({
  cartItems,
  isAllChecked,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  const checkHandler = ({ target }) => {
    if (cartItems.length > 0) allCheckedHandler(target.checked); //true or false
  };

  const selectedDelete = () => {
    setCartItems(cartItems.filter(item => !checkedItems.has(item.cartItemId)));
    setCheckedItems(new Set());

    const query = [...checkedItems].map(itemId => `itemId=${itemId}`).join('&');
    fetch(`http://10.58.52.240:3000/carts?${query}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
      },
    });
  };

  return (
    <div className="selectContainer">
      <input
        className="checkAll"
        type="checkbox"
        checked={isAllChecked}
        onChange={e => checkHandler(e)}
      />
      {console.log(isAllChecked)}
      <div className="selectAll">
        전체선택({checkedItems.size}/{cartItems.length})
      </div>
      {console.log('cartItems.length > 0 :', cartItems.length > 0)}
      <button
        className="selectedDelete"
        type="button"
        onClick={selectedDelete}
        disabled={cartItems.length === 0}
      >
        선택삭제
      </button>
    </div>
  );
};

export default SelectContainer;
