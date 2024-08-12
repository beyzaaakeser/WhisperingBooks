import React from 'react';
import './styles/header.scss';

const Header = () => {
  return (
    <div className="header-container ">
      <div className='flex flex-row  items-center'>
        <img src="/src/assets/img/book-logo.png" alt="" />
        <h2>WhisperingBooks</h2>
      </div>

      
    </div>
  );
};

export default Header;
