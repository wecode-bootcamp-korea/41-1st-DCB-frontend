import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './pages/main/Main';
import Signup from './pages/signup/Sigup';
import Login from './pages/login/Login';
import ItemList from './pages/itemLists/ItemLists';
import Details from './pages/details/Details';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
