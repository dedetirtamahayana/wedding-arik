import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <div className='section-1 bg-abuterang'>
        <div className='grid grid-cols-12'>
          <div className='col-span-10 border-r border-birutext pt-20'></div>
          <div className='col-span-2'></div>
        </div>
      </div>
      <div className='section-video bg-abuterang'>
        <div className='video-wrapper'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=eSQr7Z42H1o'
            className='react-player'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </>
  );
};

export default Video;
