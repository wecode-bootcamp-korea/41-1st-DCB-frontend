import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ items }) => {
  const { name, thumbnail, price, descriptions } = items;
  return (
    <article className="productSearch">
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon">
          <BsCart3 className="cart" size="25px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <p className="productDesc">{descriptions}</p>
    </article>
  );
};
