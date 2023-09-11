import React from 'react';
import homeLogo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const Home = () => {
  const btnClass =
    'text-black py-[10px] w-[86px] bg-white rounded-[10px] text-center font-[ABeeZee] transition-all duration-300 active:bg-white active:text-black hover:bg-transparent hover:text-white';
  return (
    <div className='h-full bg-cover bg-[url(./assets/bg.png)] bg-[#000B23] text-white'>
      <div className='flex items-center justify-center w-full pt-[57px]'>
        <img src={homeLogo} alt='logo' />
      </div>
      <div className='flex items-center justify-center mt-[207px]'>
        <div className='flex flex-col gap-[24px] py-[30px] w-[240px] bg-[#4F2486] rounded-[16px]'>
          <h1 className='text-[22px] font-semibold text-center font-[Gilroy]'>Выбери язык</h1>
          <div className='flex items-center gap-[10px] justify-center'>
            <Link className={btnClass} to={'/login'}>
              Русский
            </Link>
            <Link className={btnClass} to={'/login'}>
              Ozbek
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
