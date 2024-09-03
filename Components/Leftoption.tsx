import Image from 'next/image';
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
const Leftoption = () => {
  return (
    <section className='w-12 h-12'>
        <div>
            <Image src='/down.png' alt='' width={30} height={30} layout="fixed" />
        </div>
        <div className='mt-3 '>
        <UserIcon className="h-6 w-6 text-gray-500" />
        </div>
    </section>
  );
};

export default Leftoption;