import React, { useState } from 'react';
import logo from '../assets/question-logo.svg';
import bg from '../assets/contact-bg.png';
import { Link } from 'react-router-dom';
import { socials } from '../constants';
import SocialBtn from '../components/socialBtn';

const Contact = () => {
  const [number, setNumber] = useState();
  const [username, setUsername] = useState();
  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    if (number && !username) {
      return setDisabled(true);
    } else if (number && username) {
      return setDisabled(false);
    }
    setDisabled(true);
  };

  const btnClass =
    'text-black py-[10px] w-[86px] bg-white rounded-[10px] text-center font-[ABeeZee] transition-all duration-300 active:bg-white active:text-black hover:bg-transparent hover:text-white';
  return (
    <div className='min-h-screen h-full bg-[#000B23] bg-[url(./assets/mask-contact.png)] bg-bottom bg-no-repeat bg-contain text-white'>
      <div className='flex items-center justify-end w-full pt-[57px] px-5'>
        <img src={logo} alt='logo' />
      </div>
      <div className='mt-[42px] flex flex-col items-center justify-center gap-[25px]'>
        <div className='flex flex-col w-[320px] gap-[25px]'>
          <h1 className='text-[20px] font-bold text-center leading-[100%] font-[Inter] uppercase contact__title'>
            все круто! теперь выигрывай путешествие
          </h1>
          <h2 className='text-[20px] font-bold text-center leading-[150%] text-white font-[Inter] uppercase'>
            Чтобы участвовать в розыгрыше путешествия, оставь актуальную почту и поделись c друзьями
          </h2>
        </div>
        <form className='flex flex-col py-[16px] px-[13px] gap-[10px] contact__form w-[290px]'>
          <label htmlFor='phone' className='flex gap-[10px] items-center text-white text-[14px] font-[Inter]'>
            <div className='rounded border border-[solid_255,255,255,0.43] flex items-center justify-center w-[22px] h-[20px]'>
              <span className='contact__span z-[1000]'>1</span>
            </div>
            <h3>Оставь имя и номер телефона</h3>
          </label>
          <div className='flex flex-col gap-1'>
            <input
              value={username}
              onChange={e => {
                handleDisabled();
                setUsername(e.target.value);
              }}
              type='text'
              name='text'
              id='name'
              placeholder='Ввести имя'
              className='bg-transparent outline-0 py-[16px] px-[13px] text-[14px] rounded-md w-full placeholder:text-white border border-[rgba(98,255,130,0.99)]'
            />
            <input
              value={number}
              onChange={e => {
                handleDisabled();
                setNumber(e.target.value);
              }}
              type='number'
              name='phone'
              id='phone'
              placeholder='Ввести номер'
              className='bg-transparent outline-0 py-[16px] mt-[10px] px-[13px] text-[14px] rounded-md w-full placeholder:text-white border border-[rgba(98,255,130,0.99)]'
            />
            <p className='text-[9px] text-[rgba(255,255,255,0.50)] leading-[137%]'>Неверный формат почты</p>
          </div>
          <button
            className='text-white font-black font-[Inter] text-center leading-[130%] py-[14px] bg-gradient-to-r from-[rgba(43,187,73,1)] to-[rgba(0,186,226,1)] rounded-xl disabled:opacity-40'
            disabled={disabled}
          >
            Я оставил
          </button>
        </form>
        <form className='flex flex-col py-[16px] px-[13px] gap-[10px] contact__form w-[290px]'>
          <label htmlFor='phone' className='flex gap-[10px] items-center text-white text-[14px] font-[Inter]'>
            <div className='rounded border border-[solid_255,255,255,0.43] flex items-center justify-center w-[22px] h-[20px]'>
              <span className='contact__span z-[1000]'>2</span>
            </div>
            <h3>Поделись с друзьями</h3>
          </label>
          <div className='flex flex-col gap-1'>
            <div className='contact__social flex justify-between mt-[10px] mb-[28px]'>
              {socials.map((social, i) => (
                <SocialBtn social={social} key={i} />
              ))}
            </div>
          </div>
          <button className='text-white font-black font-[Inter] text-center leading-[130%] py-[14px] bg-gradient-to-r from-[rgba(43,187,73,1)] to-[rgba(0,186,226,1)] rounded-xl'>
            Я поделился
          </button>
        </form>
        <div className='mt-[42px] mb-[15px]'>
          <img src={bg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
