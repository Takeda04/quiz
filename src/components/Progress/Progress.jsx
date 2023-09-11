import React from 'react';
import './progress.css';

function ProgressBar({ progress }) {
  const activeClass = 'text-white before:bg-white';
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4'>
      <div className='w-full bg-gray-300 h-[10px] rounded-md overflow-hidden'>
        <div
          className='h-full bg-[#581DFF] relative text-center text-white font-bold rounded-md'
          style={{ width: `${progress}%` }}
        >
          <span className='absolute right-[0.5px] top-[1px]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
              <circle cx='4' cy='4' r='4' fill='white' />
              <path d='M2 4.5L4 6L6.5 2.5' stroke='#0041EA' />
            </svg>
          </span>
        </div>
        <span className='absolute right-[0.5px] top-[1px]'>
          <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
            <circle cx='4' cy='4' r='4' fill='white' />
            <path d='M2 4.5L4 6L6.5 2.5' stroke='#0041EA' />
          </svg>
        </span>
      </div>
      <div className='w-full flex items-center uppercase justify-between mt-2 text-[8px] text-[#2d9ba380] font-["JetBrains_Mono"]'>
        <div className={`level ${progress > 5 ? activeClass : ''}`}>
          <p className=''>Junior</p>
        </div>
        <div className={`level ${progress > 50 ? activeClass : ''}`}>
          <p className=''>Middle</p>
        </div>
        <div className={`level ${progress > 98 ? activeClass : ''}`}>
          <p className=''>Senior</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

// <button
//             onClick={() => completeStep(33)}
//             className={`bg-green-500 text-white px-4 py-2 rounded-md ${
//               isCheckoutEnabled ? 'cursor-not-allowed opacity-50' : ''
//             }`}
//             disabled={isCheckoutEnabled}
//           >
//             Checkout
//           </button>
