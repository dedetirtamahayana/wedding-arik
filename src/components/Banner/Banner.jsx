import React from "react";
import { BsAsterisk } from "react-icons/bs";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const Banner = () => {
  return (
    <div className='section-1 bg-abuterang'>
      <div className='container pt-5 pb-12 mx-auto py-10'>
        <div className='flex items-end justify-end pb-20'>
          <img src='/bintang-item.png' alt='' className='w-5 lg:w-12' />
        </div>
        <h1 className='helvetica-rounded-text text-abugelap text-7xl ml-8 lg:ml-0 lg:text-9xl tracking-wider'>
          Hai!
        </h1>
        <div className='absolute'>
          <h2 className='kunstler-text text-birutext text-9xl -mt-12 ml-20 lg:text-[12rem] lg:-mt-20 lg:ml-28 relative '>
            {" "}
            Halo
          </h2>
        </div>
        <div className='pt-12 lg:pt-24 mt-9 ml-16 lg:ml-[6.25rem] halvetica-light-text tracking-widest text-sm lg:text-xl'>
          <p>Kami Mengundang Anda</p>
          <p>
            untuk hadir pada acara{" "}
            <span className='font-bolg text-birutext'>Pernikahan</span> Kami.
          </p>
        </div>
      </div>
      <div className='section-2'>
        <div className='pb-12'>
          <img src='/banner.png' alt='' className='w-full h-[90%]' />
        </div>
        <div className='relative'>
          <div className='flex justify-end'>
            <div className='bg-abu px-4 pt-16 pb-4 absolute z-10 -mt-[4.5rem] lg:-mt-[4.5rem] mr-4 lg:mr-[7rem]'>
              <HiOutlineArrowNarrowDown className='text-birutext w-12 h-14 align-bottom custom-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
