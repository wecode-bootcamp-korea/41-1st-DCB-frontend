import React from 'react';
import { API } from '../../../../../../config';
import './SelectContainer.scss';

const SelectContainer = ({
  cartItems,
  allCheckedHandler,
  checkedItems,
  setCartItems,
  setCheckedItems,
}) => {
  const checkHandler = () => {
    if (cartItems.length === 0) return;
    if (allCheckedHandler) {
      setCheckedItems([]);
    } else {
      setCheckedItems(cartItems.map(item => item.cartId));
    }
  };
  const deleteHandler = () => {
    const query = checkedItems.map(cartId => `cartId=${cartId}`).join('&');

    fetch(`${API.cart}?${query}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        // 응답에대한 처리 코드
      });

    setCartItems(cartItems.filter(item => !checkedItems.includes(item.cartId)));
    setCheckedItems([]);
  };

  return (
    <div className="selectContainer">
      <input
        className="checkAll"
        type="checkbox"
        checked={allCheckedHandler}
        onChange={checkHandler}
      />
      <div className="selectAll">
        전체선택({checkedItems.length}/{cartItems.length})
      </div>
      <button
        className="selectedDelete"
        type="button"
        onClick={deleteHandler}
        disabled={cartItems.length === 0}
      >
        선택삭제
      </button>
    </div>
  );
};

export default SelectContainer;
