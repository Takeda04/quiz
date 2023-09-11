import React from 'react';
import logo from '../assets/question-logo.svg';
import { Progress } from '../components';

const Question = () => {
  return (
    <div className='pt-[60px] px-[15px] bg-[#000B23] bg-contain h-full max-h-full w-full'>
      <div className='mb-[51px] w-full flex items-center justify-center '>
        <img src={logo} alt='question logo' />
      </div>

      <Progress />
    </div>
  );
};

export default Question;
