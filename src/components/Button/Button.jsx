import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ type, text, disabled, to }) => {
  const navigate = useNavigate();
  return (
    <button
      type={type}
      onClick={() => navigate(to ? to : '')}
      disabled={disabled}
      className='disabled:bg-[#ffffff4d] disabled:text-[#A7A4AF] outline-0 transition-all duration-300 bg-white text-[#581DFF] py-[10px] w-[109px] text-bold rounded-[30px] active:bg-white active:text-[#581DFF] hover:bg-[#581DFF] hover:text-white'
    >
      {text}
    </button>
  );
};

export default Button;
