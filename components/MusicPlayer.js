import React, { useState, useRef, useEffect, useContext } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { PlayingNowContext } from "../contexts/PlayingNowContext";

const MusicPlayer = () => {
  const {music} = useContext(PlayingNowContext);
  const playingNow = music
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const audioElem = useRef();
  const clickRef = useRef();
  const songs = playingNow.hub.actions[1].uri;

  
  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  //   const skipBack = ()=>{
  //     const index = songs.findIndex( x =>x.title == currentSong.title);
  //     if(index == 0){
  //       setCurrentSong(songs[songs.length - 1])
  //     }else {
  //       setCurrentSong(songs[index - 1])
  //     }
  //     audioElem.current.currentTime = 0
  //   }

  return (
    <>
      <audio src={songs} ref={audioElem} onTimeUpdate={onPlaying} />
      {/* <div className="h-[125px] bg-[#1E1E1E] opacity-95 mt-10 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10"></div> */}
      {playingNow && (
        <div className="h-[123px] bg-[#1E1E1E]/50 opacity-95 mt-8 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10 backdrop-blur-xl z-50">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:px-5 md:px-5 px-0 mt-4  lg:gap-20 md:gap-20 gap-4">
            <div className=" flex-row items-center lg:flex md:flex hidden   ">
              <img
                className="lg:h-[63px] h-[50px] rounded-2xl"
                src={playingNow.images.background}
              />
              <div className="ml-4">
                <h3 className="text-lg text-white leading-5">
                  {playingNow.title}
                </h3>
                <p className="text-gray-500 text-base">
                  {playingNow.artists[0].alias}
                </p>
              </div>
            </div>
            <div className=" flex flex-row gap-6">
              <img src="/shuffle.svg" />
              <img src="/previous.svg" />

              <div
                className="bg-yellow-400 text-center rounded-full p-2 flex items-center justify-center"
                onClick={PlayPause}
              >
                {isPlaying ? (
                  <FaPause className="text-white text-xs" />
                ) : (
                  <FaPlay className="text-white text-xs" />
                )}
              </div>

              <img src="/next.svg" className="  " />
              <img src="/repeatOne.svg" />
            </div>
            <div className="flex flex-row gap-2 ">
              <img src="/volumeIcon.svg" className="lg:block md:block hidden" />
              <img src="/volumeBar.svg" className="lg:block md:block hidden" />
            </div>
          </div>
          <div className="flex justify-center lg:mt-6 md:mt-10 mt-4 w-full ">
            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar"
                style={{ width: currentSong.progress + "%" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
