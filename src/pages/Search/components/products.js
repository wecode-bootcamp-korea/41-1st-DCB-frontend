import { Product } from './product';
import './products.scss';

export const Products = ({ items }) => {
  return (
    <div className="productsSearch">
      <div className="productLists">
        {items.map(items => (
          <Product key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};
