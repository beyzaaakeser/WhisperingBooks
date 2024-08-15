import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TbArrowLoopRight } from 'react-icons/tb';
import './styles/undefined.scss';

const Undefined = () => {
  const navigate = useNavigate();
  const location = useLocation();

 

  return (
    <div className="h-full">
      {location.state && (
        <p className="text-center p-0 m-0 text-amber-600  ">Error Code : {location.state} </p>
      )}
      <img
        src="https://i.pinimg.com/originals/65/3a/91/653a912fceab7eb5de03b0a7b7135b4e.gif"
        className="rounded pb-6 pt-3 h-full m-auto "
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
