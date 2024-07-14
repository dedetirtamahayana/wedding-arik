import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <div className='section-1 bg-abuterang'>
        <div className='grid grid-cols-12'>
          <div className='col-span-10 border-r border-birutext pt-20'></div>
          <div className='col-span-2'>
            <p></p>
          </div>
        </div>
      </div>
      <div className='section-video bg-abuterang'>
        <div className='video-wrapper'>
          <ReactPlayer
            url='https://youtu.be/oTv30zdnXEM'
            className='react-player'
            width='100%'
            height='100%'
          />
        </div>
      </div>
      <div className='section-text bg-abuterang'>
        <div className='container mx-auto grid text-center lg:px-0 pt-8 pb-20 lg:pt-16 lg:pb-4 text-[0.7rem] lg:text-medium  text-abugelap helvetica-thick-text tracking-wider '></div>
      </div>
    </>
  );
};

export default Video;
