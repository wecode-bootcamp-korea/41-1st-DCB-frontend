import React, { useEffect, useState } from 'react';
import { Products } from './components/Products';
import { EventImages } from './components/EventImages';
import './main.scss';

const Main = () => {
  const [vw, setVw] = useState(100);
  useEffect(() => {
    const timer = setInterval(() => {
      if (vw <= 100 && vw > -100) {
        setVw(prev => prev - 100);
      }
      if (vw <= -100) {
        setVw(100);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [vw]);

  return (
    <div className="main">
      <div className="eventImages" style={{ transform: `translate(${vw}vw)` }}>
        {EVENTIMAGES.map(({ id, src, alt }) => (
          <EventImages key={id} src={src} alt={alt} />
        ))}
      </div>
      <div className="productsList">
        <Products productName="따끈따끈한 신상" />
        <div className="adBanner">
          <span className="bannerComment">Do you wanna go camping?</span>
          <img className="bannerImg" src="./images/선물.png" alt="선물" />
        </div>
        <Products productName="지갑은 가볍게 양손은 무겁게" />
      </div>
    </div>
  );
};
export default Main;

const EVENTIMAGES = [
  { id: 1, src: './images/10.jpg', alt: '하늘' },
  { id: 2, src: './images/12.jpg', alt: '바다' },
  { id: 3, src: './images/14.jpg', alt: '하늘과 바다' },
];
