"use client";
import React from 'react';
import Nav from './Nav';
const LeftTop = () => {
  return (
    <section className="rounded-lg">
      <div className="w-full md:w-48 lg:w-[32rem] h-3 md:h-48 lg:h-[13rem]  bg-gray-600 flex justify-center text-white rounded-lg">
        <Nav />
      </div>
    </section>
  );
};

export default LeftTop;