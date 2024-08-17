import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Products = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-5 bg-orange-900 text-orange-300">
      <aside className='flex flex-col bg-white p-5'>
        <NavLink to={`/products/story`}>STORY</NavLink>
        <NavLink to={`/products/novel`}>NOVEL</NavLink>
      </aside>

      <Outlet />

    </div>
  );
};

export default Products;
