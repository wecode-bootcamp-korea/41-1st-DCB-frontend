import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ name, thumbnail, price }) => {
  return (
    <article className="product">
      <div
        className="productImage"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div className="cartIcon" onClick={handleClickCart}>
          <BsCart3 className="cart" size="28px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
    </article>
  );
};
