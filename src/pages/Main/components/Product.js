import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ name, thumbnail, price }) => {
  return (
    <article className="product">
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon">
          <BsCart3 className="cart" size="28px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
    </article>
  );
};
