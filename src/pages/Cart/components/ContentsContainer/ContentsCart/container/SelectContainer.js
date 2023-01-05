import React from 'react';

import './SelectContainer.scss';

const SelectContainer = () => {
  return (
    <div className="selectContainer">
      <input type="checkbox" className="checkAll" />
      <div className="selectAll">전체선택(7/7)</div>
      <button className="selectedDelete">선택삭제</button>
    </div>
  );
};

export default SelectContainer;
