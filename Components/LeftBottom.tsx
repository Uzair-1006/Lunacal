import React from 'react';
import Image from 'next/image';
import Leftoption from './Leftoption';

const LeftBottom = () => {
  return (
    <section className="rounded-lg">
      
      <div>
        <div className="w-full md:w-48 lg:w-[32rem] h-6 md:h-52 lg:h-[15rem]  bg-gray-600 flex  text-white rounded-lg">
            <div>
              <Leftoption/>
            </div>
          <div>
            <Image src='/Images.png' alt='' width={450} height={450} />
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default LeftBottom;