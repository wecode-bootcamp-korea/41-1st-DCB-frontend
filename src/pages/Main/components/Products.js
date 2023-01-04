import { useEffect, useState } from 'react';
import { Product } from './Product';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './products.scss';

export const Products = ({ productName }) => {
  const [productData, setProductData] = useState([]);
  const [px, setPx] = useState(0);
  useEffect(() => {
    fetch('data/products.json')
      .then(res => res.json())
      .then(result => {
        setProductData(result);
      });
  }, []);

  const handleClickLeft = () => {
    setPx(prev => prev + 260);
  };
  const handleClickRight = () => {
    setPx(prev => prev - 260);
  };
  return (
    <div className="products">
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
            <Product
              className="productCard"
              key={id}
              name={name}
              src={thumbnail}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
