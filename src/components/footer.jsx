import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/footer.scss";

const Footer = () => {
  return (
    <div className="h-24 bg-amber-900 text-white text-center footer flex justify-center items-center">
      <p>
        &copy;{' '}
        <Link  onClick={(e) => { e.preventDefault(); window.open("https://github.com/beyzaaakeser/WhisperingBooks.git", "_blank"); }}  className='text-xl text-amber-400'>
          Beyza Keser
        </Link>{' '}
        All Rights Reserved.{' '}
      </p>
    </div>
  );
};

export default Footer;
