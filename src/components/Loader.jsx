import React from 'react';

const Loader = () => {
  return (
    <div className="loading-page w-full  bg-transparent flex items-center justify-center ">
      <div className="animate-spin h-[150px] w-[150px] mr-3 border-amber-600 border-e-2 border-s-2 rounded-full"></div>
    </div>
  );
};

export default Loader;
