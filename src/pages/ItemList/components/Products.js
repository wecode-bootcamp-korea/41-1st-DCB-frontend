import { useEffect, useState } from 'react';
import { Product } from './Product';
import './products.scss';

export const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('data/selectedItems.json')
      .then(res => res.json())
      .then(result => setItems(result));
  }, []);

  return (
    <div className="products">
      <div className="productLists">
        {items.map(({ id, name, thumbnail, price, descriptions }) => (
          <Product
            key={id}
            name={name}
            thumbnail={thumbnail}
            price={price}
            descriptions={descriptions}
          />
        ))}
      </div>
    </div>
  );
};
