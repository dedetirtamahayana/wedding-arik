import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "@/components/Gallery/Photo.jsx";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
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

  return (
    <>
      <div className='section-1 bg-abuterang border-t-1 border-birutext relative z-10'>
        <div className='container mx-auto p-0'>
          <div className='grid grid-cols-12'>
            <div className='col-span-5 lg:col-span-4 border-r border-birutext pt-32'>
              <h2 className='text-4xl lg:text-7xl text-abugelap helvetica-rounded-text absolute ml-[3.5rem] -mt-[5.5rem] lg:-mt-[6.5rem] lg:ml-[11rem]'>
                Gall <span className='mr-[1.8rem]'></span>ry
              </h2>
              <h2 className='text-[11rem] ml-32 -mt-[14.4rem] lg:text-[15rem] lg:-mt-[18rem] lg:ml-[20rem] absolute text-abugelap kunstler-text'>
                e
              </h2>
            </div>
            <div className='col-span-7 lg:col-span-8 relative'>
              <div className='absolute z-0 inset-0'>
                <motion.img
                  ref={ref1}
                  animate={controls1}
                  initial='hidden'
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  src='/24.png'
                  alt=''
                  className='text-end z-20 w-40 ml-20 mt-6 lg:w-72 absolute lg:ml-[41rem] lg:-mt-16'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2 bg-birubg relative z-20'>
        <div className='container mx-auto py-8 px-4'>
          <PhotoAlbum
            photos={photos}
            layout='rows'
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>

      <div className='section-3 bg-abuterang pb-20'>
        <div className='container mx-auto'>
          <div className=' z-0 '>
            <motion.img
              ref={ref1}
              animate={controls1}
              initial='hidden'
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              src='/24.png'
              alt=''
              className='text-end w-40 -mt-[4.5rem] ml-4 lg:w-72 lg:-mt-[6.5rem] lg:-ml-16'
            />
          </div>
          <div className='grid grid-cols-2 justify-items-end items-end'>
            <div></div>
            <div className='flex gap-1 items-end'>
              <p className='uppercase text-abugelap font-bold helvetica-rounded-text text-xs'>
                A
              </p>
              <p className='uppercase text-abugelap font-bold helvetica-rounded-text text-sm'>
                New Chapter
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
