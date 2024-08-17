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
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />

          <Route path='/products' element={<Products/>}>
              <Route path='story' element={<h1>STORY</h1>} />
              <Route path='novel' element={<h1>NOVEL</h1>} />
          </Route>

          <Route path="*" element={<Undefined />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
