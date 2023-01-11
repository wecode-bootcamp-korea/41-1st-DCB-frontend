import React, { useState, useEffect } from 'react';
import ContentsContainer from './components/ContentsContainer/ContentsContainer';
import CartTotal from './components/CartTotal/CartTotal';
import './Cart.scss';

const Cart = () => {
  console.log('render!!!');
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const allCheckedHandler =
    cartItems.length === checkedItems.length && cartItems.length;

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems(prev => [...prev, id]);
    } else {
      setCheckedItems(prev => prev.filter(item => item !== id));
    }
  };

  // useEffect(() => {
  //   fetch('data/cartItems.json')
  //     .then(response => response.json())
  //     .then(cart => {
  //       setCartItems(cart);
  //       setCheckedItems(cart.map(item => item.cartItemId));
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://10.58.52.240:3000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(cart => {
        setCartItems(cart.data);
        setCheckedItems(cart.data.map(item => item.cartItemId));
      });
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="sectionContainer">
          <ContentsContainer
            cartItems={cartItems}
            checkedItemHandler={checkedItemHandler}
            allCheckedHandler={allCheckedHandler}
            checkedItems={checkedItems}
            setCartItems={setCartItems}
            setCheckedItems={setCheckedItems}
          />
          <CartTotal cartItems={cartItems} checkedItems={checkedItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiJ9.NA.BTas9NAaYhQqppm4rSzCAqkvmLEO-Z6xVtYuKDnQvxI'
);

localStorage.setItem(
  'cartsLocalStorage',
  '[{"cartId":1,"cartQuantity":1,"cartUserId":1,"cartItemId":1,"itemsName":"엠보싱 비닐장갑 200매aaaaaaaaaaaaaaaaaaaaaaaaaaa","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/5b6575423fbb6ad38c01daab840447e8.png","itemsPrice":"2490.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":2,"cartQuantity":2,"cartUserId":1,"cartItemId":2,"itemsName":"쉐이빙젤 200mL","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/6c690d26ac4aefc4f883ae5e0d1e99bf.png","itemsPrice":"2990.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":3,"cartQuantity":1,"cartUserId":1,"cartItemId":3,"itemsName":"면도용품 선물세트","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/186b1c5fb9a7012d0333f0852d819b21.png","itemsPrice":"12890.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":4,"cartQuantity":3,"cartUserId":1,"cartItemId":4,"itemsName":"도톰한 호텔 수건","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/6036410411fb6872b452c3b014f85878.png","itemsPrice":"16490.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":5,"cartQuantity":1,"cartUserId":1,"cartItemId":5,"itemsName":"치석케어 칫솔 4개입","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/e0dd283e263218eeeefd485dd54d43d5.png","itemsPrice":"2890.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":6,"cartQuantity":5,"cartUserId":1,"cartItemId":6,"itemsName":"면도기 스타터 세트","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/20905e575377165b37ef428f12eb91e4.png","itemsPrice":"4390.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":7,"cartQuantity":2,"cartUserId":1,"cartItemId":7,"itemsName":"충치균 항균 가글","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/00ca9b87da3865dd70a0450f13e628a6.png","itemsPrice":"1390.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":8,"cartQuantity":3,"cartUserId":1,"cartItemId":8,"itemsName":"활력충전 멀티비타민","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/93f82bb57c05c22613c5b074bb270936.png","itemsPrice":"4690.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":9,"cartQuantity":1,"cartUserId":1,"cartItemId":9,"itemsName":"자연유래 성분 치약","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/3a7f335cd78f718d0c0fc647dae1658c.png","itemsPrice":"1190.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]},{"cartId":10,"cartQuantity":3,"cartUserId":1,"cartItemId":10,"itemsName":"장 건강 유산균","itemsThumbnail":"https://www.wiselycompany.com/web/product/tiny/202212/414927a0fa620b50d16435c5de15d034.png","itemsPrice":"12290.000","optionDescription":[{"content":"red","option_id":1,"categoryName":"Color"}]}]'
);
