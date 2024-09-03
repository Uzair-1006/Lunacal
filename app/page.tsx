import Instructions from '@/Components/Instructions'; // Ensure this path is correct
import Left from '@/Components/Left';
// import LeftTop from '@/Components/Left-top';
import React from 'react';

const Page = () => {
  return (
    <section className='flex gap-8   bg-gradient-to-r from-gray-800 to-black min-h-screen w-full h-full  justify-center'>
      <div className='flex items-center gap-8 '>
        <Instructions/>
      </div>
      <div className='mt-[91px]'> 
        <Left/>
      </div>
       
    </section>
  );
};

export default Page;