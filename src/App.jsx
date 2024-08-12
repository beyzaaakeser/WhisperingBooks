import React from 'react';
import Header from './components/header';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer';
import Undefined from './pages/Undefined';
import Detail from './pages/Detail';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/undefined" element={<Undefined />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
