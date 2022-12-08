import React, {useContext} from "react";
import HeartIcon from "./Icons/HeartIcon";
import NewData from "./NewData";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlayingNowContext } from "../contexts/PlayingNowContext";

const TopCharts = () => {

  const {setMusic} = useContext(PlayingNowContext);
  const topChartData = NewData[0].item
  const router = useRouter()

  // const goNextPage= () => router.push("/album")
  const goNextPage = (theMusic)=>{
    setMusic(theMusic)
    return router.push("/album")
  }

  return (
    <div className=" relative lg:mt-0 mt-10  ">
      <h1 className="text-white text-2xl font-bold mb-4 text-center md:mb-10 lg:mb-4">
        Top charts
      </h1>
      <div className="flex gap-4 lg:flex-col flex-row overflow-x-auto scrollbar-hide shrink-0">
        {topChartData.map((item, index) => {
          return (
      
            <div onClick={()=>goNextPage(item)}>
              <TopChart
              title={item.title}
              artist={item.artists[0].alias}
              img={item.images.background}
              // duration={item.track.duration_ms}
              key={index}
            />
            </div>
           
          );
        })}
       
      </div>
    </div>
  );
};

export default TopCharts;

const TopChart = ({ title, artist, duration, img }) => {
  return (

  
    <div className="flex flex-row items-center md:justify-between p-4 rounded-2xl bg-bg2 lg:w-full w-[223px] shrink-0 cursor-pointer ">
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
