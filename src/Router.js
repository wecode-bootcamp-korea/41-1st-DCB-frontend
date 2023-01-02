import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Cart from './pages/cart/Cart';
import Details from './pages/details/Details';
import ItemList from './pages/itemLists/ItemLists';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Signup from './pages/signup/Sigup';
import Footer from './components/footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
