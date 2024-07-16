import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Location = () => {
  // Animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  // Refs and inView states for each section
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.2 });

  // Effect to control animation based on inView state
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    } else {
      controls5.start("hidden");
    }
  }, [controls5, inView5]);

  return (
    <>
      <div className='section bg-birutext' ref={ref1}>
        <div className='container mx-auto pt-8 pb-10 h-[200px] lg:h-[300px]'>
          <div className='flex justify-between items-center'>
            <p className='helvetica-rounded-text text-abu text-[0.6rem] lg:text-xl uppercase'>
              Jadwal
            </p>
            <img src='/bintang-putih.png' alt='' className='w-5 lg:w-12' />
          </div>
          <motion.div
            animate={controls1}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='kunstler-text text-abu pl-[32px] text-[8rem] mt-[1.6rem] -ml-4 lg:text-[20rem] lg:-mt-16 lg:-ml-8 absolute'>
              Acara:
            </h2>
          </motion.div>
        </div>
      </div>
      <div className='section-2 bg-abuterang' ref={ref2}>
        <motion.img
          src='/footer.png'
          alt=''
          className='w-4/5'
          animate={controls2}
          initial='hidden'
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div
        className='section-3 bg-birutext border-b border-gray-300'
        ref={ref3}
      >
        <div className='container mx-auto'>
          <div className='grid grid-cols-12'>
            <div className=' col-span-5 lg:col-span-4 border-r border-gray-300 pt-16 pb-5'>
              <motion.div
                animate={controls3}
                initial='hidden'
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.5rem] lg:text-xl uppercase'>
                  Jam
                </p>
                <p className='text-abu helvetica-rounded-text text-4xl lg:text-7xl ml-6'>
                  09.00
                </p>
                <p className='text-abu helvetica-light-text text-[0.7rem] lg:text-xl ml-6 tracking-widest font-thin'>
                  - Sampai Selesai.
                </p>
              </motion.div>
            </div>
            <div
              className='col-span-7 lg:col-span-8 pt-16 pb-5 pl-7 lg:pl-24'
              ref={ref4}
            >
              <motion.div
                animate={controls4}
                initial='hidden'
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.5rem] lg:text-xl uppercase ml-20 lg:ml-48'>
                  Tanggal Acara
                </p>

                <p className='text-abu helvetica-rounded-text text-4xl lg:text-7xl ml-0 lg:ml-6 relative'>
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-4 bg-birutext pt-16 pb-10' ref={ref5}>
        <div className='container mx-auto lg:p-0'>
          <motion.div
            animate={controls5}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <p className='helvetica-rounded-text text-abu italic tracking-widest text-[0.6rem] lg:text-xl uppercase '>
              Tempat Acara
            </p>
            <p className='text-abu helvetica-rounded-text text-4xl lg:text-9xl ml-10 lg:ml-20 '>
              Sanur,
            </p>
            <p className='ml-28 lg:ml-56 text-abu text-medium lg:text-3xl font-thin'>
              Jln.
              <span className='text-abu helvetica-rounded-text text-xl lg:text-7xl ml-2 '>
                Muktisari
              </span>{" "}
              Gg .1 No. 10
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Location;
