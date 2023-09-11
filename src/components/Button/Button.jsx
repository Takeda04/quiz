import React from 'react';

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className='disabled:bg-[#ffffff4d] disabled:text-[#A7A4AF] transition-all duration-300 bg-white text-[#581DFF] py-[10px] w-[109px] text-bold rounded-[30px] active:bg-white active:text-[#581DFF] hover:bg-[#581DFF] hover:text-white'
    >
      {text}
    </button>
  );
};

export default Button;
