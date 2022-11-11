import React from "react";

const MusicPlayer = () => {
  return (
    <>
     {/* <div className="h-[125px] bg-[#1E1E1E] opacity-95 mt-10 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10"></div> */}
    <div className="h-[125px] bg-[#1E1E1E]/50 opacity-95 mt-10 max-w-[1440px] fixed bottom-0 left-0 right-0 px-10 backdrop-blur-xl z-50">
      <div className="flex flex-row items-center justify-between lg:px-5 md:px-5 px-0 lg:mt-4 md:mt-4 mt-8  gap-20">
        <div className="flex flex-row items-center ">
          <img src="/topChartImage2.svg" />
          <div className="ml-4">
            <h3 className="text-lg text-white leading-5">Season</h3>
            <p className="text-gray-500 text-base">James</p>
          </div>
        </div>
        <div className="w-[257px] flex flex-row">
          <img src="/shuffle.svg" className="lg:block md:block hidden" />
          <img src="/previous.svg" className="lg:ml-6 md:ml-6 ml-4" />
          <img src="/musicPlayIcon.svg" className="ml-6" />
          <img src="/next.svg" className=" lg:ml-6 md:ml-6 ml-4 " />
          <img src="/repeatOne.svg" className="ml-6 lg:block md:block hidden" />
        </div>
        <div className="flex flex-row gap-2 ">
          <img src="/volumeIcon.svg" className="lg:block md:block hidden" />
          <img src="/volumeBar.svg" className="lg:block md:block hidden" />
        </div>
      </div>
      <div className="flex justify-center mt-4  ">
        <img src="/playRectangle.svg" className="lg:block md:block hidden" />
      </div>
    </div>
    </>
  );
};

export default MusicPlayer;
