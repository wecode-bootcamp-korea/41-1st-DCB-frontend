import { Product } from './Product';
import './products.scss';

export const Products = ({ items }) => {
  return (
    <div className="products">
      <div className="productLists">
        {items.map(({ id, product_name, thumbnail, price, contents }) => (
          <Product
            key={id}
            id={id}
            name={product_name}
            thumbnail={thumbnail}
            price={price}
            contents={contents}
          />
        ))}
      </div>
    </div>
  );
};
