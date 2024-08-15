import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowLoopRight } from 'react-icons/tb';
const Undefined = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <img
        src="https://cdn.svgator.com/images/2024/04/book-with-broken-pages-animation-404-error.gif"
        className="rounded py-6 h-full m-auto"
      />

      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <div className="flex justify-center items-center gap-2 text-xl bg-amber-900  w-50 px-6 py-2 rounded text-amber-300 hover:text-amber-900 hover:bg-amber-400 duration-500">
          <TbArrowLoopRight /> Home
        </div>
      </div>
    </div>
  );
};

export default Undefined;
