import { Product } from './Product';
import './products.scss';

export const Products = ({ items }) => {
  return (
    <div className="products">
      <div className="productLists">
        {items.map(({ id, name, thumbnail, price, contents }) => (
          <Product
            key={id}
            id={id}
            name={name}
            thumbnail={thumbnail}
            price={price}
            contents={contents}
          />
        ))}
      </div>
    </div>
  );
};
