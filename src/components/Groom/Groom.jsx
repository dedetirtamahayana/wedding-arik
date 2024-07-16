import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Groom = () => {
  const controlsArikImage = useAnimation();
  const controlsArikText = useAnimation();
  const controlsSriImage = useAnimation();
  const controlsSriText = useAnimation();
  const controlsArikDetails = useAnimation();
  const controlsSriDetails = useAnimation();

  const [refArikImage, inViewArikImage] = useInView({ threshold: 0.2 });
  const [refArikText, inViewArikText] = useInView({ threshold: 0.2 });
  const [refSriImage, inViewSriImage] = useInView({ threshold: 0.2 });
  const [refSriText, inViewSriText] = useInView({ threshold: 0.2 });
  const [refArikDetails, inViewArikDetails] = useInView({ threshold: 0.2 });
  const [refSriDetails, inViewSriDetails] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inViewArikImage) controlsArikImage.start("visible");
    else controlsArikImage.start("hidden");
  }, [controlsArikImage, inViewArikImage]);

  useEffect(() => {
    if (inViewArikText) controlsArikText.start("visible");
    else controlsArikText.start("hidden");
  }, [controlsArikText, inViewArikText]);

  useEffect(() => {
    if (inViewSriImage) controlsSriImage.start("visible");
    else controlsSriImage.start("hidden");
  }, [controlsSriImage, inViewSriImage]);

  useEffect(() => {
    if (inViewSriText) controlsSriText.start("visible");
    else controlsSriText.start("hidden");
  }, [controlsSriText, inViewSriText]);

  useEffect(() => {
    if (inViewArikDetails) controlsArikDetails.start("visible");
    else controlsArikDetails.start("hidden");
  }, [controlsArikDetails, inViewArikDetails]);

  useEffect(() => {
    if (inViewSriDetails) controlsSriDetails.start("visible");
    else controlsSriDetails.start("hidden");
  }, [controlsSriDetails, inViewSriDetails]);

  return (
    <>
      <div className='section-arik bg-abuterang divide-y border-t border-b border-gray-300 divide-gray-300'>
        <div className='container mx-auto p-0'>
          <motion.div
            ref={refArikImage}
            animate={controlsArikImage}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <img src='arik.png' alt='' className='w-52 ml-8 lg:w-96' />
          </motion.div>
        </div>
      </div>
      <div className='section-text-arik bg-abuterang relative'>
        <div className='container mx-auto p-0 relative'>
          <motion.div
            ref={refArikText}
            animate={controlsArikText}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='kunstler-text text-birutext text-[8rem] -mt-[5.8rem] -ml-0 lg:text-[15rem] absolute lg:-mt-44 lg:-ml-48 z-10'>
              Arik
            </h2>
          </motion.div>

          <div className='lg:py-32 lg:px-0 tracking-wider pb-[6rem] pt-[5rem] pl-8'>
            <motion.div
              ref={refArikDetails}
              animate={controlsArikDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <p className='helvetica-rounded-text text-birutext tracking-wider text-sm lg:text-xl pb-5'>
                I Wayan Arik Aristyawan, S.Kom.
              </p>
            </motion.div>
            <motion.div
              ref={refArikDetails}
              animate={controlsArikDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9 }}
            >
              <span className='text-sm helvetica-light-text text-abugelap'>
                Anak Pertama
              </span>
            </motion.div>
            <motion.div
              ref={refArikDetails}
              animate={controlsArikDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
            >
              <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
                I Wayan Joni
              </p>
            </motion.div>
            <motion.div
              ref={refArikDetails}
              animate={controlsArikDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.1 }}
            >
              <span className='halvetica-bold-text text-birutext text-sm lg:text-xl'>
                &
              </span>
            </motion.div>
            <motion.div
              ref={refArikDetails}
              animate={controlsArikDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2 }}
            >
              <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
                Ni Wayan Wiratni
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='section-sri bg-abuterang divide-y border-t border-b border-gray-300 divide-gray-300'>
        <div className='container mx-auto p-0 grid grid-cols-1'>
          <motion.div
            ref={refSriImage}
            animate={controlsSriImage}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className='col-start-1 col-end-2 justify-self-end'
          >
            <img src='gung-sri.png' alt='' className='w-52 mr-8 lg:w-96' />
          </motion.div>
        </div>
      </div>
      <div className='section-text-sri bg-abuterang'>
        <div className='container mx-auto p-0'>
          <motion.div
            ref={refSriText}
            animate={controlsSriText}
            initial='hidden'
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className='kunstler-text text-birutext text-[8rem] -mt-[18rem] -ml-[1.5rem] lg:text-[15rem] lg:-mt-[33rem] lg:ml-96 absolute z-10'>
              Gung
            </h2>
            <h2 className='kunstler-text text-birutext text-[8rem] -mt-[5rem] ml-[16rem] lg:text-[15rem] lg:-mt-[9.5rem] lg:ml-[57rem] absolute z-10 text-gung-sri'>
              Sri
            </h2>
          </motion.div>
          <div className='lg:py-32 lg:px-0 tracking-wider text-right pb-[6rem] pt-[5rem] pr-8'>
            <motion.div
              ref={refSriDetails}
              animate={controlsSriDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <p className='helvetica-rounded-text text-birutext tracking-wider text-sm lg:text-xl pb-5'>
                I Gusti Ayu Agung Sri Sasmita Dewi, S. Pd.
              </p>
            </motion.div>
            <motion.div
              ref={refSriDetails}
              animate={controlsSriDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9 }}
            >
              <span className='text-sm helvetica-light-text text-abugelap'>
                Anak Pertama
              </span>
            </motion.div>
            <motion.div
              ref={refSriDetails}
              animate={controlsSriDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
            >
              <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
                I Gusti Ngurah Anom Widanta
              </p>
            </motion.div>
            <motion.div
              ref={refSriDetails}
              animate={controlsSriDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.1 }}
            >
              <span className='halvetica-bold-text text-birutext text-sm lg:text-xl'>
                &
              </span>
            </motion.div>
            <motion.div
              ref={refSriDetails}
              animate={controlsSriDetails}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2 }}
            >
              <p className='helvetica-rounded-text text-birutext text-sm lg:text-xl'>
                I Gusti Ayu Putu Parwati
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groom;
