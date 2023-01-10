import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import './product.scss';

export const Product = ({ id, name, thumbnail, price, contents }) => {
  const navigate = useNavigate();
  const handleClickItem = () => {
    navigate(`/details/${id}`);
  };

  const handleClickCart = e => {
    e.stopPropagation();
    fetch('http://10.58.52.240:3000/cart', {
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
        } else {
          alert('로그인 창으로 이동합니다.');
          navigate('/login');
        }
      });
  };
  return (
    <div className="product" onClick={handleClickItem}>
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon" onClick={e => handleClickCart(e, id, name)}>
          <BsCart3 className="cart" size="25px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{Number(price)}원</p>
      <p className="productDesc">{contents}</p>
    </div>
  );
};
