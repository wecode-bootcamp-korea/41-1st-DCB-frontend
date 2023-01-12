import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { API } from '../../../config';
import './productMain.scss';

export const ProductMain = ({
  id,
  product_name,
  thumbnail,
  price,
  option_category_id,
  options,
}) => {
  const navigate = useNavigate();
  const handleClickItem = () => {
    navigate(`/details/${id}`);
  };

  const handleClickCart = e => {
    e.stopPropagation();
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        itemId: id,
        quantity: 1,
        optionId: option_category_id ? options[0].option_id : null,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (localStorage.getItem('Token')) {
          alert(`장바구니에 ${product_name} 상품을 담았습니다.`);
        } else {
          alert('로그인 창으로 이동합니다.');
          navigate('/login');
        }
      });
  };
  return (
    <article className="productMain" onClick={handleClickItem}>
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon" onClick={handleClickCart}>
          <BsCart3 className="cart" size="28px" />
        </div>
      </div>
      <p className="productName">{product_name}</p>
      <p className="productPrice">{Number(price)}원</p>
    </article>
  );
};
