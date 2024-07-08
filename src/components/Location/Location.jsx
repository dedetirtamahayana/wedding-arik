import React from "react";

const Location = () => {
  return (
    <>
      <div className='section bg-birutext'>
        <div className='container mx-auto pt-8 pb-10 h-[200px] lg:h-[300px]'>
          <div className='flex justify-between items-center'>
            <p className='helvetica-rounded-text text-abu text-[0.6rem] lg:text-xl uppercase'>
              Jadwal
            </p>
            <img src='/bintang-putih.png' alt='' className='w-5 lg:w-12' />
          </div>

          <h2 className='kunstler-text text-abu text-[10rem] -mt-[1.6rem] -ml-4 lg:text-[20rem] lg:-mt-16 lg:-ml-8 absolute'>
            Acara:
          </h2>
        </div>
      </div>
      <div className='section-2 bg-abuterang'>
        <img src='/footer.png' alt='' className='w-4/5' />
      </div>

      <div className='section-3 bg-birutext border-b border-gray-300'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-12'>
            <div className=' col-span-5 lg:col-span-4 border-r border-gray-300 pt-16 pb-5'>
              <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.5rem] lg:text-xl uppercase mb-4'>
                Jam
              </p>
              <p className='text-abu helvetica-rounded-text text-4xl lg:text-7xl ml-6 mb-4'>
                09.00
              </p>
              <p className='text-abu helvetica-light-text text-[0.7rem] lg:text-xl ml-6 tracking-widest font-thin'>
                - Sampai Selesai.
              </p>
            </div>
            <div className='col-span-7 lg:col-span-8 pt-16 pb-5 pl-7 lg:pl-24'>
              <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.5rem] lg:text-xl uppercase ml-20 lg:ml-48'>
                Tanggal Acara
              </p>

              <p className='text-abu helvetica-rounded-text text-4xl lg:text-7xl ml-0 lg:ml-6 relative my-4'>
                Kamis,
              </p>
              <div className='ml-[3.5rem] lg:ml-32 text-medium lg:text-3xl'>
                <p className='text-abu helvetica-light-text relative'>
                  25 <span className='ml-3'>Juli 2024</span>
                </p>
                <span className='kunstler-text text-abu text-2xl lg:text-3xl ml-[1.3rem] -mt-[2.5rem] lg:ml-[2.2rem] absolute lg:-mt-12'>
                  th
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-4 bg-birutext pt-16 pb-10'>
        <div className='container mx-auto lg:p-0'>
          <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.6rem] lg:text-xl uppercase mb-4'>
            Tempat Acara
          </p>
          <p className='text-abu helvetica-rounded-text text-4xl lg:text-9xl ml-10 lg:ml-20 mb-4'>
            Sanur,
          </p>
          <p className='ml-28 lg:ml-56 text-abu text-medium lg:text-3xl font-thin'>
            Jln.
            <span className='text-abu helvetica-rounded-text text-xl lg:text-7xl ml-2 mb-4'>
              Muktisari
            </span>{" "}
            Gg .1 No. 10
          </p>
        </div>
      </div>
    </>
  );
};

export default Location;
