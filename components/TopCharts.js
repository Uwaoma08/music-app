import React from "react";
import HeartIcon from "./Icons/HeartIcon";
import data from "../data";
import Link from "next/link";

const TopCharts = () => {
  return (
    <div className=" relative lg:mt-0 mt-10 ">
      <h1 className="text-white text-2xl font-bold mb-4 text-center md:mb-10 lg:mb-4">
        Top charts
      </h1>
      <div className="flex gap-4 lg:flex-col flex-row overflow-x-auto scrollbar-hide shrink-0">
        {data.map((item, index) => {
          return (
            <Link
            key={index}
            href={{ pathname: "/album", query: { anything: index} }}
          >
        
            <TopChart
              title={item.title}
              artist={item.artists[0].alias}
              img={item.images.background}
              // duration={item.track.duration_ms}
              key={index}
            />
            </Link>
          );
        })}
        {/* <TopChart
          title="Reggae “n” blues"
          artist="Dj YK mule"
          duration="1:02:42"
          img="/topChartImage2.svg"
        />
        <TopChart
          title="Tomorrow’s tunes"
          artist="Obi Datti"
          duration="2:01:25"
          img="/topChartImage3.svg"
        />
        <TopChart
          title="Golden age of 80s"
          artist="Sean swadder"
          duration="2:34:45"
          img="/topChartImage1.svg"
        /> */}
      </div>
    </div>
  );
};

export default TopCharts;

const TopChart = ({ title, artist, duration, img }) => {
  return (

  
    <div className="flex flex-row items-center md:justify-between p-4 rounded-2xl bg-bg2 lg:w-full w-[223px] shrink-0 ">
      <div className="flex lg:items-center items-start  lg:flex-row  flex-col lg:mr-0 justify-start w-full ">
        <div className="">
          {" "}
          <img src={img} className="lg:h-[63px] lg:w-[63] rounded-2xl" />{" "}
        </div>
        <div className="flex flex-col lg:ml-4 ml-0 lg:mt-0 mt-4  ">
          <h3 className="text-lg text-white leading-5">{title}</h3>
          <p className="text-grayColor text-base">{artist}</p>
          <p className="text-base text-white">{duration}</p>
        </div>
      </div>

      <div className="h-[37px] w-[37px] border-2 border-grayColor rounded-full lg:flex hidden items-center justify-center lg:mt-0  mt-[-100px]   ">
        <HeartIcon />
      </div>
    </div>
    
  );
};
