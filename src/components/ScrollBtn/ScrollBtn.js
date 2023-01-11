import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import './scrollBtn.scss';

const ScrollBtn = () => {
  return (
    <div className="scrollBtn">
      <BsArrowUpCircle size="50px" className="btnIcon" />
    </div>
  );
};

export default ScrollBtn;
