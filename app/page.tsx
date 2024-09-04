import Instructions from '@/Components/Instructions'; 
import Left from '@/Components/Left';
import React from 'react';

const Page = () => {
  return (
    <section className='flex gap-8 items h-screen bg-gradient-to-r from-gray-800 to-black w-full justify-center'>
      <div className='flex ml-20 items-center gap-8'>
        <Instructions/>
      </div>
      <div className='flex-1 mt-14'> 
        <Left/>
      </div>
       
    </section>
  );
};

export default Page;