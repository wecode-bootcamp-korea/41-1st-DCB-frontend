import React from 'react';
import { useEffect, useState } from 'react';
import './ProductDescription.scss';

const ProductDescription = () => {
  const [productDetails, setproductDeatils] = useState([{}]);

  useEffect(() => {
    fetch('data/details.json')
      .then(result => result.json())
      .then(data => setproductDeatils(data));
  }, []);
  console.log(productDetails);
  return (
    <div className="productDescription">
      <div className="Description">
        <img className="img" src={productDetails[0].thumbnail} />
      </div>
      <div className="longDescription">{productDetails[0].discriptions}</div>
    </div>
  );
};
export default ProductDescription;
