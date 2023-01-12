import { Product } from './Product';
import './products.scss';

export const Products = ({ items }) => {
  return (
    <div className="products">
      <div className="productLists">
        {items.map(items => (
          <Product key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};
