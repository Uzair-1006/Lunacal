import { GUIDELINES } from '@/constants';
import React from 'react';

const guidelinesArray = GUIDELINES.split('\n').map((line, index) => (
  <p key={index}>{line}</p>
));

const Instructions = () => {
  return (
    <section className="w-80 md:w-96 lg:w-[32rem] h-80 md:h-96 lg:h-[30rem] bg-[#616161D1] text-white rounded-lg">
      <div className="h-full w-full space-y-2 p-4 rounded-lg">
        {/* <label htmlFor="instructions" className="text-lg font-semibold">Instructions:</label> */}
        <div>{guidelinesArray}</div>
      </div>
    </section>
  );
};

export default Instructions;