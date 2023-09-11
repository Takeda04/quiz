import React from 'react';
import homeLogo from '../assets/logo.svg';
import anonsy from '../assets/anonsy.png';
import { Link } from 'react-router-dom';
import { Button } from '../components';

const Login = () => {
  return (
    <div className='h-full bg-cover bg-[url(./assets/bg.png)] bg-[#000B23] text-white'>
      <div className='flex items-center justify-center w-full pt-[57px]'>
        <img src={homeLogo} alt='logo' />
      </div>
      <div className='flex flex-col gap-[16px] text-center uppercase mt-[77px]'>
        <h2 className='text-[35px] font-extrabold'>Узнай кто ты в IT?</h2>
        <p className='text-[12px] font-semibold'>
          пройди Интерактивный ТЕст и узнай какая специальность в IT, тебе подходит больше всего.
        </p>
      </div>
      <div className='w-full flex items-center justify-center mt-[47px]'>
        <img src={anonsy} alt='' />
      </div>
      <div className='mt-[52px] flex flex-col gap-[19px] w-full items-center'>
        <p className='text-[#ffffff85] text-[10px] font-medium uppercase'>Время выполнения 5 минут</p>

        <Link to={'/questions'}>
          <Button type={'button'} text={'Поехали'} />
        </Link>
      </div>
    </div>
  );
};

export default Login;
