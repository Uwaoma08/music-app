import React from "react";



const Hero = () => {
  return (
    <>
      <div className="w-full bg-[#609EAF] rounded-3xl relative px-10 py-10 h-[373px] md:ml-20 lg:ml-4 lg:w-[98%] md:w-[90%] md:mt-[-394px] lg:mt-0 mt-0 ">
        <img src="/coil.svg" className="absolute top-0 right-0 lg:hidden md:hidden" />
        <img src="/bigCoil.svg" className="lg:block md:block absolute top-0 right-5 hidden " />
        <img src="/heroImage.svg" className="lg:block md:block absolute top-0 right-0 hidden " />
        <div className="flex flex-col gap-20 md:w-[50%]  lg:w-[50%]">
          <p className="text-sm text-white font-extralight">
            Currated playlist
          </p>
          <div className="lg:mt-0 md:mt-0 mt-[-30px]">
            <h1 className="text-4xl text-white mb-4 font-bold">R & B Hits</h1>
            <p className="text-sm text-primaryColor font-extralight ">
              All mine, Lie again, Petty call me everyday, Out of time, <br className="lg:block hidden"/> No love,
              Bad habit, and so much more
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col  mt-10 md:w-[60%]  lg:w-[80%]">
          <div className="flex flex-row items-center mb-4 lg:mb-0 md:mb-0 lg:mr-8">
            <img src="/likeImage1.svg" />
            <img src="/likeImage2.svg" className="ml-[-20px]" />
            <img src="/likeImage3.svg" className="ml-[-20px]" />
            <img src="/likeImage4.svg" className="ml-[-20px]" />
            <img src="/likeImage5.svg" className="ml-[-20px]" />
          </div>
          <div className="flex flex-row  gap-4 items-center">
            <img src="/Heart.svg" className=""/>
            <h1 className="text-2xl text-white font-extralight">33K Likes</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
