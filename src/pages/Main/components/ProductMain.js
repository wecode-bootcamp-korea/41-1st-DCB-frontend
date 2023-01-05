import { BsCart3 } from 'react-icons/bs';
import './productMain.scss';

export const ProductMain = ({ name, thumbnail, price }) => {
  return (
    <article className="productMain">
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
