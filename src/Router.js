import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ItemList from './pages/ItemList/ItemList';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Mypage from './pages/Mypage/Mypage';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollBtn />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/search-list" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
