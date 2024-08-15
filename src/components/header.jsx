import React from 'react';
import './styles/header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container flex items-center justify-between ">
      <div className="flex flex-row  items-center">
        <Link to="/">
          <img src="/src/assets/img/book-logo.png" alt="" />
        </Link>
        <Link to="/" className=''>
          <h2 className='hidden sm:block'>WhisperingBooks</h2>
        </Link>
      </div>

      <div>
        <input
          type="text"
          class=" lg:w-[400px] block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-700 sm:text-sm sm:leading-6"
          placeholder="Search Books"
        />
      </div>
    </div>
  );
};

export default Header;
