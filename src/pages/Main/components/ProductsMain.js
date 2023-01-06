import { useEffect, useState } from 'react';
import { ProductMain } from './ProductMain';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './productsMain.scss';

export const ProductsMain = ({ productName }) => {
  const [productData, setProductData] = useState([]);
  const [px, setPx] = useState(0);

  useEffect(() => {
    fetch('data/products.json')
      .then(res => res.json())
      .then(result => {
        setProductData(result);
      });
  }, []);

  const overFlowValue =
    productData.length < 5 ? 0 : (productData.length - 5) * 265;
  const CARDWIDTH = 265;

  const handleClickLeft = () => {
    if (px <= -overFlowValue) {
      setPx(prev => prev + CARDWIDTH);
    }
  };

  const handleClickRight = () => {
    if (px >= -overFlowValue) {
      setPx(prev => prev - CARDWIDTH);
    }
  };

  return (
    <div className="productsMain">
      <p className="productsName">{productName}</p>
      <FiChevronLeft
        size="25px"
        className="carouselBtn"
        onClick={handleClickLeft}
      />
      <FiChevronRight
        size="25px"
        className="carouselBtn"
        onClick={handleClickRight}
      />
      <div className="carouselContainer">
        <div
          className="productLists"
          style={{ transform: `translate(${px}px)` }}
        >
          {productData.map(({ id, name, thumbnail, price }) => (
            <ProductMain
              className="productCard"
              key={id}
              name={name}
              thumbnail={thumbnail}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
