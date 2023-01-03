import React, { useEffect, useState } from 'react';
import { Products } from './components/Products';
import './main.scss';

const Main = () => {
  const [vw, setVw] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (vw <= 0 && vw > -200) {
        setVw(prev => prev - 100);
      }
      if (vw <= -200) {
        setVw(0);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [vw]);
  return (
    <div className="main">
      <div className="eventImages" style={{ transform: `translate(${vw}vw)` }}>
        <div className="imageContainer">
          <img src="./images/10.jpg" />
        </div>
        <div className="imageContainer">
          <img src="./images/12.jpg" />
        </div>
        <div className="imageContainer">
          <img src="./images/14.jpg" />
        </div>
      </div>
      <div className="productsList">
        <Products productName="따끈따끈한 신상" />
        <div className="adBanner">
          {/* <img src="./images/banner.png" className="adBanner" /> */}
          <span className="bannerComment">Do you wanna go camping?</span>
          <img className="bannerImg" src="./images/선물.png" />
        </div>
        <Products productName="지갑은 가볍게 양손은 무겁게" />
      </div>
    </div>
  );
};
export default Main;
