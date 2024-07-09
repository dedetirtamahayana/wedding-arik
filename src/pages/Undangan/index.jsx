import React, { useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Backdrop from "@/components/Backdrop/Backdrop";
import Banner from "@/components/Banner/Banner";
import Groom from "@/components/Groom/Groom";
import Location from "@/components/Location/Location";
import { Maps } from "@/components/Maps/Maps";
import ThankU from "@/components/ThankU/ThankU";
import Video from "@/components/Video/Video";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

const Undangan = ({ setIsPlaying, isPlaying }) => {
  // Terima prop setIsPlaying dan isPlaying
  const [showUndangan, setShowUndangan] = useState(false);
  const [audioPaused, setAudioPaused] = useState(false);

  const toggleAudio = () => {
    setAudioPaused(!audioPaused);
    setIsPlaying(!audioPaused); // Panggil setIsPlaying dari prop
  };

  useEffect(() => {
    const audioElement = document.getElementById("myAudio");

    if (audioPaused) {
      audioElement.pause();
      audioElement.currentTime = 0;
    } else {
      audioElement.play();
    }
  }, [audioPaused]);

  const showUndanganPage = () => {
    setShowUndangan(true);
  };

  return (
    <div className='relative animate__animated animate__fadeIn animate__slower bg-undangan'>
      <div className='fixed bottom-96 right-0 mt-4 mr-4 z-50'>
        <button
          onClick={toggleAudio}
          className='w-12 h-12 bg-birubg text-white hover:animate-pulse rounded-full flex items-center justify-center'
        >
          {audioPaused ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      <div className=''>
        <Banner />
        <Groom />
        <Location />
        <Maps />
        <ThankU />
        <Video />
        <Gallery />
        <Footer />
      </div>

      <audio id='myAudio' hidden>
        <source src='/sound-wedding.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>

      {showUndangan && <Backdrop onClick={showUndanganPage} />}
    </div>
  );
};

export default Undangan;
