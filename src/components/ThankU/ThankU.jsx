import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Countdown from "./Countdown/Countdown";
const ThankU = () => {
  return (
    <>
      <div className='section-1 bg-abuterang'>
        <div className='container mx-auto py-20'>
          <div className='helvetica-thick-text text-abugelap tracking-wider text-[0.8rem] ml-6 lg:text-xl '>
            <p>Atas Kehadiran dan doa restunya</p>
            <p>kami sekeluarga mengucapkan</p>
          </div>
          <div className=' pt-12 pb-24 lg:pt-20 lg:pb-40 ml-7 lg:ml-44'>
            <img src='/kasih.png' alt='' className='w-[250px] ml-[51px]' />
          </div>
          <div className=' absolute z-10 mt-[1.2rem] ml-12 lg:ml-[6rem]'>
            <img src='/panah-bg.png' alt='' className='w-[25px]' />
          </div>
        </div>
      </div>
      <div className='section-2 bg-abuterang border-y-1 border-birutext'>
        <div className='container'>
          <div className='absolute -mt-[0.7rem] ml-24'>
            <img src='/countdown.png' alt='' className='w-[150px]' />
          </div>
          <div>
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
