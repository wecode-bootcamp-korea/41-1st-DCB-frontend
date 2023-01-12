import React from 'react';
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
      setCheckedItems(cartItems.map(item => item.cartItemId));
    }
  };
  const deleteHandler = () => {
    const query = checkedItems.map(itemId => `itemId=${itemId}`).join('&');

    fetch(`http://10.58.52.240:3000/carts?${query}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        // 응답에대한 처리 코드
      });

    setCartItems(
      cartItems.filter(item => !checkedItems.includes(item.cartItemId))
    );
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
