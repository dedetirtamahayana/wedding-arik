import React from "react";

const Footer = () => {
  return (
    <>
      <div className='section relative'>
        <img src='/end.png' alt='' className='w-full h-[90%] z-10' />
        <img
          src='/bintang-putih.png'
          alt=''
          className='absolute w-5 lg:w-12 -mt-8 ml-12 lg:-mt-[6rem] lg:ml-40 z-20'
        />
      </div>
    </>
  );
};

export default Footer;
