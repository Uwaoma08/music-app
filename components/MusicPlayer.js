import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import data from "../data";

const MusicPlayer = ({ playingNow }) => {
  const [songs, setSongs] = useState(playingNow.track.preview_url);
  const [isPlaying, setIsPlaying] = useState(false);

  // console.log(playingNow);

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const audioElem = useRef();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        src={songs}
        ref={audioElem}
        
      />
      {/* <div className="h-[125px] bg-[#1E1E1E] opacity-95 mt-10 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10"></div> */}
      {playingNow && (
        <div className="h-[125px] bg-[#1E1E1E]/50 opacity-95 mt-10 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10 backdrop-blur-xl z-50">
          <div className="flex flex-row items-center justify-between lg:px-5 md:px-5 px-0 lg:mt-4 md:mt-4 mt-8  gap-20">
            <div className="flex flex-row items-center ">
              <img
                className="h-[63px]"
                src={playingNow.track.album.images[0].url}
              />
              <div className="ml-4">
                <h3 className="text-lg text-white leading-5">
                  {playingNow.track.name}
                </h3>
                <p className="text-gray-500 text-base">
                  {playingNow.track.artists[0].name}
                </p>
              </div>
            </div>
            <div className="w-[257px] flex flex-row gap-6">
              <img src="/shuffle.svg" className=" lg:block md:block hidden" />
              <img src="/previous.svg" />

              <div className="bg-yellow-400 text-center rounded-full h-6 w-6 flex items-center justify-center" onClick={PlayPause}>
                {isPlaying ? <FaPause className="text-white text-xs" /> :  <FaPlay className="text-white text-xs" />
               }
              </div>

              <img src="/next.svg" className="  " />
              <img src="/repeatOne.svg" className=" lg:block md:block hidden" />
            </div>
            <div className="flex flex-row gap-2 ">
              <img src="/volumeIcon.svg" className="lg:block md:block hidden" />
              <img src="/volumeBar.svg" className="lg:block md:block hidden" />
            </div>
          </div>
          <div className="flex justify-center mt-4  ">
            <img
              src="/playRectangle.svg"
              className="lg:block md:block hidden"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
