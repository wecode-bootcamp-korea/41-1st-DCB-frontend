import { BsCart3 } from 'react-icons/bs';
import './productMain.scss';
import { useNavigate } from 'react-router-dom';

export const ProductMain = ({ id, name, thumbnail, price }) => {
  const navigate = useNavigate();

  const handleClickItem = id => {
    navigate(`/details/${id}`);
  };

  const addCart = ({ e, id, name }) => {
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
          console.log(id, name);
          alert(`장바구니에 ${name} 상품을 담았습니다.`);
          navigate('/cart');
        } else {
          alert('로그인 창으로 이동합니다.');
          navigate('/login');
        }
      });
  };

  return (
    <div className="productMain" onClick={() => handleClickItem(id)}>
      <div className="productCard">
        <img src={thumbnail} alt="product" className="productImage" />
        <div className="cartIcon" onClick={e => addCart({ e, id, name })}>
          <BsCart3 className="cart" size="28px" />
        </div>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">{parseInt(price)}원</p>
    </div>
  );
};
