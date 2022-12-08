import React, { useContext } from "react";
import Release from "./Release";
import NewData from "./NewData";
import { useRouter } from "next/router";
import { PlayingNowContext } from "../contexts/PlayingNowContext";


const Popular = () => {

  const {setMusic} = useContext(PlayingNowContext);
  const popularData = NewData[2].item;
  const router = useRouter();

  const goNextPage = (theMusic)=>{
    setMusic(theMusic)
    return router.push("/album")
  }

  return (
    <div className="mt-10">
      <h1 className="text-white text-2xl font-bold mb-4 lg:text-left text-center  ">
        Popular in your area
      </h1>
      <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
        {popularData.map((item, index) => {
          return (
            
              <div onClick={()=>goNextPage(item)}>
              <Release
                title={item.title}
                artist={item.artists[0].alias}
                img={item.images.background}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
