import React, { useState } from 'react';
import './CartItemWrap.scss';

const CartItemWrap = ({
  cartItem,
  checkedItemHandler,
  checkedItems,
  setCartItems,
  cartItems,
  setCheckedItems,
}) => {
  const [checked, setChecked] = useState(false);

  const quantity = cartItem.cartQuantity;
  const isChecked = checkedItems.includes(cartItem.cartItemId);

  const toStrPrice = price => price.toLocaleString();
  const checkHandler = ({ target }) => {
    setChecked(!checked);
    checkedItemHandler(cartItem.cartItemId, target.checked);
  };
  const deleteHandler = () => {
    fetch(`http://10.58.52.240:3000/carts?itemId=${cartItem.cartItemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setCartItems(
      cartItems.filter(item => item.cartItemId !== cartItem.cartItemId)
    );
    setCheckedItems(
      checkedItems.filter(itemId => itemId !== cartItem.cartItemId)
    );
  };
  const quantityHandler = type => {
    if (quantity === 1 && type === 'minus') return;
    const count = type === 'plus' ? 1 : -1;

    fetch(`http://10.58.52.240:3000/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: `${quantity + count}`,
        itemId: `${cartItem.cartItemId}`,
      }),
    });
    setCartItems(
      cartItems.map(item =>
        item.cartItemId === cartItem.cartItemId
          ? { ...item, cartQuantity: item.cartQuantity + count }
          : item
      )
    );
  };

  return (
    <div className="cartItemWrap">
      <input
        className="check"
        type="checkbox"
        checked={isChecked}
        onChange={e => checkHandler(e)}
      />
      <div className="thumbnail">
        <a href="">
          <img
            className="thumbnailImg"
            src={cartItem.itemsThumbnail}
            alt={cartItem.itemsName}
          />
        </a>
      </div>
      <div className="prdboxWrap">
        <div className="wrap">
          <div className="prdName">{cartItem.itemsName}</div>
          {cartItem.optionDescription.map(option => (
            <div className="prdOption" key={cartItem.cartItemId}>
              {option.categoryName}: {option.content}
            </div>
          ))}
        </div>
        <div className="quantityPriceWrap">
          <div className="quantity">
            <button
              className="controlBtn"
              onClick={() => quantityHandler('minus')}
            >
              -
            </button>
            <input className="amount" type="text" value={quantity} size="2" />
            <button
              className="controlBtn"
              onClick={() => quantityHandler('plus')}
            >
              +
            </button>
          </div>
          <div className="priceDelWrap">
            <div className="price">
              {toStrPrice(parseInt(cartItem.itemsPrice) * quantity)}원
            </div>
            <button className="deleteBtn" onClick={deleteHandler}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const CartItemWrap = ({
//   cartItem,
//   checkedItemHandler,
//   isAllChecked,
//   checkedItems,
// }) => {
//   const [checked, setChecked] = useState(false);
//   const [count, setCount] = useState(cartItem.cartQuantity);

//   const toStrPrice = price => price.toLocaleString();

//   const checkHandler = ({ target }) => {
//     setChecked(!checked);
//     checkedItemHandler(cartItem.cartItemId, target.checked);
//   };

//   const deleteHandler = () => {
//     // http://10.58.52.240:3000/cart?itemId=12&itemId=13
//     console.log('cartItem.cartItemId :', cartItem.cartItemId);
//     fetch(`http://10.58.52.240:3000/carts?itemId=${cartItem.cartItemId}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization:
//           'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
//       },
//     });
//   };

//   const quantityHandler = type => {
//     console.log(
//       JSON.stringify({
//         quantity: `${count + 1}`,
//         itemId: `${cartItem.cartItemId}`,
//       })
//     );
//     if (type === 'plus') {
//       console.log(count);
//       fetch(`http://10.58.52.240:3000/carts`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           Authorization:
//             'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
//         },
//         body: JSON.stringify({
//           quantity: `${count + 1}`,
//           itemId: `${cartItem.cartItemId}`,
//         }),
//       }).then(res => console.log(res));

//       setCount(count + 1);
//     } else {
//       if (count === 1) return;
//       fetch(`http://10.58.52.240:3000/carts`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//           Authorization:
//             'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI',
//         },
//         body: JSON.stringify({
//           quantity: `${count - 1}`,
//           itemId: `${cartItem.cartItemId}`,
//         }),
//       }).then(res => console.log(res));

//       setCount(count - 1);
//     }
//   };

//   // useEffect(() => {}, [count]);

//   // useEffect(() => {
//   //   setChecked(isAllChecked);
//   // }, [isAllChecked]);

//   useEffect(() => {
//     setChecked(isAllChecked);
//   }, []);

//   // count가 변경되면 API호출
//   // {
//   //   method: 'PATCH',
//   //   body: JSON.stringify({ cartQuantity: count }),
//   //   headers: {
//   //     Authorization: localStorage.getItem('Token'),
//   //   },
//   // }

//   return (
//     <div className="cartItemWrap">
//       <input
//         className="check"
//         type="checkbox"
//         checked={checked}
//         onChange={e => checkHandler(e)}
//       />
//       <div className="thumbnail">
//         <a href="">
//           <img
//             className="thumbnailImg"
//             src={cartItem.itemsThumbnail}
//             alt={cartItem.itemsName}
//           />
//         </a>
//       </div>
//       <div className="prdboxWrap">
//         <div className="wrap">
//           <div className="prdName">{cartItem.itemsName}</div>
//           {cartItem.optionDescription.map(option => (
//             <div className="prdOption" key={cartItem.cartItemId}>
//               {option.categoryName}: {option.content}
//             </div>
//           ))}
//         </div>
//         <div className="quantityPriceWrap">
//           <div className="quantity">
//             <button
//               className="controlBtn"
//               onClick={() => quantityHandler('minus')}
//             >
//               -
//             </button>
//             <input className="amount" type="text" value={count} size="2" />
//             <button
//               className="controlBtn"
//               onClick={() => quantityHandler('plus')}
//             >
//               +
//             </button>
//           </div>
//           <div className="priceDelWrap">
//             <div className="price">
//               {toStrPrice(parseInt(cartItem.itemsPrice) * count)}원
//             </div>
//             <button className="deleteBtn" onClick={deleteHandler}>
//               x
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CartItemWrap;
