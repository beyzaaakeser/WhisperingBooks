import React, { useState } from 'react';
import './styles/header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container flex items-center justify-between ">
      <div className="flex flex-row  items-center">
        <Link to="/">
          <img src="/src/assets/img/book-logo.png" alt="" />
        </Link>
        <Link to="/" className="">
          <h2>WhisperingBooks</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
