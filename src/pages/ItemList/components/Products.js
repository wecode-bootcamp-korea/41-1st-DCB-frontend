import { useEffect, useState } from 'react';
import { Product } from './Product';
import './products.scss';

export const Products = () => {
  const [mock, setMock] = useState([]);
  useEffect(() => {
    fetch('data/selectedItems.json')
      .then(res => res.json())
      .then(result => setMock(result));
  }, []);

  return (
    <div className="products">
      <div className="productLists">
        {mock.map(product => (
          <Product
            key={product.id}
            name={product.itemName}
            src={product.thumbnail}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};
