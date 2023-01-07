import { Product } from './Product';
import './products.scss';

export const Products = ({ items }) => {
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
