import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Countdown from "./Countdown/Countdown";
const ThankU = () => {
  return (
    <>
      <div className='section-1 bg-abuterang'>
        <div className='container mx-auto py-20'>
          <div className='helvetica-thick-text text-abugelap tracking-wider text[0.6rem] lg:text-xl '>
            <p>Atas Kehadiran dan doa restunya</p>
            <p>kami sekeluarga mengucapkan</p>
          </div>
          <div className=' pt-12 pb-24 lg:pt-20 lg:pb-40 ml-7 lg:ml-44'>
            <h2 className='helvetica-rounded-text text-abugelap tracking-widest text-5xl lg:text-9xl'>
              Terima
            </h2>
            <h2 className='kunstler-text text-birutext text-[6rem] ml-[5.5rem] -mt-[3.5rem] lg:text-[12rem] absolute lg:ml-72 lg:-mt-28'>
              Kasih
            </h2>
          </div>
          <div className='px-4 pt-16 pb-4 absolute z-10 -mt-[3.2rem] ml-4 lg:ml-[6rem]'>
            <HiOutlineArrowNarrowDown className='text-birutext w-12 h-14 align-bottom custom-icon' />
          </div>
        </div>
      </div>
      <div className='section-2 bg-abuterang border-y-1 border-birutext'>
        <div className='container'>
          <div>
            <p className='absolute text-abugelap helvetica-rounded-text text-2xl ml-28 -mt-[1.1rem]  lg:text-4xl lg:-mt-6 lg:ml-[17rem] '>
              Count D wn
            </p>
            <div className='py-20'>
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankU;
