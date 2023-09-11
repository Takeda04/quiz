import React, { useState } from 'react';
import './progress.css';

function ProgressBar() {
  const [progress, setProgress] = useState(5);

  const completeStep = percentage => {
    if (percentage > progress) {
      setProgress(percentage);
    }
  };

  // Check if all steps are completed to enable the checkout button
  const isCheckoutEnabled = progress === 100;

  return (
    <div className='w-full max-w-screen-xl mx-auto px-4'>
      <div className='w-full bg-gray-300 h-[10px] rounded-md overflow-hidden'>
        <div
          className='h-full bg-[#581DFF] relative text-center text-white font-bold  rounded-md'
          style={{ width: `${progress}%` }}
        >
          <span className='absolute right-[0.5px] top-[1px]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
              <circle cx='4' cy='4' r='4' fill='white' />
              <path d='M2 4.5L4 6L6.5 2.5' stroke='#0041EA' />
            </svg>
          </span>
        </div>
      </div>
      <div className='w-full flex items-center uppercase justify-between mt-2 text-white text-[8px] text-[#2d9ba380] font-["JetBrains_Mono"]'>
        <div className='level'>
          <p className=''>Junior</p>
        </div>
        <div className='level'>
          <p className=''>Middle</p>
        </div>
        <div className='level'>
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
