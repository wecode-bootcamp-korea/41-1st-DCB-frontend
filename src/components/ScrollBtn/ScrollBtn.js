import React, { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import './scrollBtn.scss';

const ScrollBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div className="scrollBtn" onClick={scrollToTop}>
      <BsArrowUpCircle size="50px" className={showBtn ? 'btnIcon' : 'hidden'} />
    </div>
  );
};

export default ScrollBtn;
