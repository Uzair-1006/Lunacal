import React, { useState } from 'react';
import Leftoption from './Leftoption';
import { ABOUT_ME, MY_EXPERIENCE, RECOMMENDED } from '@/constants';

const Nav = () => {
  const [activeButton, setActiveButton] = useState(0); // Set default active button to 0 (About Me)

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const getContent = () => {
    switch (activeButton) {
      case 0:
        return <p>{ABOUT_ME}</p>;
      case 1:
        return <p>{MY_EXPERIENCE}</p>;
      case 2:
        return <p>{RECOMMENDED}</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='flex rounded-md'>
        <div className='mt-6'>
          <Leftoption />
        </div>
        <nav className='flex justify-between w-50 mt-3 rounded-md h-12 text-white bg-[#171717]'>
          <ul className='flex gap-8 mt-1 h-10'>
            <button
              className={`ml-6 ${activeButton === 0 ? 'border-green-400' : 'border-gray-400'} border-r-0`}
              onClick={() => handleButtonClick(0)}
            >
              About Me
            </button>
            <button
              className={`border-x-0 ${activeButton === 1 ? 'border-green-400' : 'border-gray-400'}`}
              onClick={() => handleButtonClick(1)}
            >
              Experiences
            </button>
            <button
              className={`mr-6 ${activeButton === 2 ? 'border-green-400' : 'border-gray-400'} border-l-0`}
              onClick={() => handleButtonClick(2)}
            >
              Recommended
            </button>
          </ul>
        </nav>
      </div>
      <div className='mt-4 ml-4'>
        {getContent()}
      </div>
    </div>
  );
};

export default Nav;