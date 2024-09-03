import React from 'react';
import Leftoption from './Leftoption';

const Navbottom = () => {
  return (
    <div className='flex'>
        <div>
            <Leftoption/>
        </div>
        <div>
            <section className='flex justify-between gap-20'>
        <div className='flex gap-10'>
            <div className='bg-[#171717] p-1 rounded-lg justify-center'>
            Gallery
            </div>
            <div className='bg-[#616161D1]  rounded-lg'>
            + Add new image
            </div>
        </div>
        <div className='flex gap-3'>
            <div className='rounded-full bg-[#171717] p-2'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3L3 5 5 7" />
            </svg>
            </div>
            <div className='rounded-full bg-[#171717] p-2'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 3L9 5 7 7" />
            </svg>
            </div>
        </div>
        </section>
        </div>
    </div>
    
  );
};

export default Navbottom;