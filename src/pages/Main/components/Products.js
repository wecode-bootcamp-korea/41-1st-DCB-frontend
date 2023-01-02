import { useEffect, useState } from 'react';
import { Product } from './Product';
import './products.scss';

export const Products = props => {
  const [mock, setMock] = useState([]);
  useEffect(() => {
    fetch('data/products.json')
      .then(res => res.json())
      .then(result => setMock(result));
  }, []);

  return (
    <div className="products">
      <p className="productsName">{props.productName}</p>
      <div className="productLists">
        {mock.map(product => (
          <Product
            key={product.id}
            name={product.itemName}
            src={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
