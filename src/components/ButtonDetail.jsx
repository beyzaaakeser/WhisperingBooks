import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs';

import './styles/buttonDetail.scss';

const ButtonDetail = ({ to, title }) => {
  return (
    <Link to={to} className="text-md px-2 py-1.5 detail-btn">
      <div className="flex items-center justify-center text-center gap-2">
        {title} <BsBoxArrowInRight className="text-xl" />
      </div>
    </Link>
  );
};

export default ButtonDetail;
