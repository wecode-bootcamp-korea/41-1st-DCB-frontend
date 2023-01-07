import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './productMain.scss';

export const ProductMain = ({ id, name, thumbnail, price }) => {
  const navigate = useNavigate();
  const addCart = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({ id }),
    })
      .then(res => res.json())
      .then(data => {
        if (localStorage.getItem('Token')) {
          alert(`장바구니에 ${name} 상품을 담았습니다.`);
          navigate('/cart');
        } else {
          alert('로그인 창으로 이동합니다.');
          navigate('/login');
        }
      });
  };
  return (
    <article className="productMain">
      <div className="productCard" onClick={addCart}>
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
