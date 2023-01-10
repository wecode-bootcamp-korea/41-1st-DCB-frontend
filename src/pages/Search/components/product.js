import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ product_name, thumbnail, price, contents }) => {
  return (
    <article className="productSearch">
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon">
          <BsCart3 className="cart" size="25px" />
        </div>
      </div>
      <p className="productName">{product_name}</p>
      <p className="productPrice">{Number(price)}원</p>
      <p className="productDesc">{contents}</p>
    </article>
  );
};
