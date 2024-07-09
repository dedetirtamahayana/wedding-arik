import React from "react";

const Groom = () => {
  return (
    <>
      <div className='section-arik bg-abuterang divide-y border-t border-b border-gray-300 divide-gray-300'>
        <div className='container mx-auto p-0'>
          <div className=''>
            <img src='arik.png' alt='' className='w-52 ml-8 lg:w-96' />
          </div>
        </div>
      </div>
      <div className='section-text-arik bg-abuterang relative'>
        <div className='container mx-auto p-0 relative'>
          <div className='relative'>
            <h2 className='kunstler-text text-birutext text-[8rem] -mt-[5.8rem] -ml-0 lg:text-[15rem] absolute lg:-mt-44 lg:-ml-48 z-10'>
              Arik
            </h2>
          </div>
          <div className='lg:py-32 lg:px-0 tracking-wider pb-[6rem] pt-[5rem] pl-8'>
            <p className='helvetica-rounded-text text-birutext tracking-wider text-sm lg:text-xl pb-5'>
              I Wayan Arik Aristyawan, S.Kom.
            </p>
            <span className='text-sm helvetica-light-text text-abugelap'>
              Anak Pertama
            </span>
            <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
              I Wayan Joni
            </p>
            <span className='halvetica-bold-text text-birutext text-sm lg:text-xl'>
              &
            </span>
            <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
              Ni Wayan Wiratni
            </p>
          </div>
        </div>
      </div>
      <div className='section-sri bg-abuterang divide-y border-t border-b border-gray-300 divide-gray-300'>
        <div className='container mx-auto p-0 grid grid-cols-1'>
          <div className='col-start-1 col-end-2 justify-self-end'>
            <img src='gung-sri.png' alt='' className='w-52 mr-8 lg:w-96' />
          </div>
        </div>
      </div>
      <div className='section-text-sri bg-abuterang'>
        <div className='container mx-auto p-0'>
          <h2 className='kunstler-text text-birutext text-[8rem] -mt-[18rem] -ml-[1.5rem] lg:text-[15rem] lg:-mt-[33rem] lg:ml-96 absolute z-10'>
            Gung
          </h2>
          <h2 className='kunstler-text text-birutext text-[8rem] -mt-[5rem] ml-[16rem] lg:text-[15rem] lg:-mt-[9.5rem] lg:ml-[57rem] absolute z-10'>
            Sri
          </h2>
          <div className='lg:py-32 lg:px-0 tracking-wider text-right pb-[6rem] pt-[5rem] pr-8'>
            <p className='helvetica-rounded-text text-birutext tracking-wider text-sm lg:text-xl pb-5'>
              I Gusti Ayu Agung Sri Sasmita Dewi, S. Pd.
            </p>
            <span className='text-sm helvetica-light-text text-abugelap'>
              Anak Pertama
            </span>
            <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
              I Gusti Ngurah Anom Widanta
            </p>
            <span className='halvetica-bold-text text-birutext text-sm lg:text-xl'>
              &
            </span>
            <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
              I Gusti Ayu Putu Parwati
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groom;
