import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ name, src, price }) => {
  return (
    <article className="product">
      <div
        className="productImage"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="cartImage">
          <BsCart3 className="cart" size="18px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
    </article>
  );
};
