import React, { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import AllSongsMobile from "../components/AllSongsMobile";
import AllSongsDesktop from "../components/AllSongsDesktop";
import data from "../data";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const album = () => {
  const router = useRouter();

  const { anything } = router.query;

  // const [activeItem, setActiveItem] = useState(data.playlist[anotherthing || something || 0].items[anything || 0 ])
  const [activeItem, setActiveItem] = useState(data[anything || 0]);

  function convertTime(newTime) {
    return new Date(newTime).toTimeString().slice(3, 9);
  }
  console.log(activeItem);

  return (
    <Layout playingNow={activeItem}>
      <img
        src={activeItem.images.background}
        className=" lg:hidden md:hidden absolute top-0 left-0 z-1 w-full  "
      />
      <div className=" lg:hidden md:hidden absolute top-0 left-0 z-1 w-full h-screen bgImg "></div>
      <img
        src={activeItem.images.background}
        className=" lg:block md:block fixed hidden top-0 left-0  z-1 w-full"
      />
      <div className=" lg:block md:block fixed hidden top-0 left-0 z-1 w-full h-screen bgImg"></div>

      <div className="lg:flex md:flex block gap-10 w-full z-1 relative bg-transparent ">
        <div>
          <LeftMenu />
        </div>
        <div className="flex lg:flex-row md:flex-row md:gap-6 lg:gap-20 gap-20 flex-col  mt-10 items-center w-full">
          <img
            src={activeItem.images.background}
            className="h-[288px] w-[284px] rounded-3xl"
          />
          <div className="">
            <h1
              className="text-3xl text-[#A4C7C6] mt-10
"
            >
              {activeItem.title}
            </h1>
            <p
              className="text-sm text-[#EFEEE0] mb-8 mt-4
"
            >
              {activeItem.artists[0].alias}
            </p>
            <p
              className="text-sm text-[#EFEEE0] mb-4
"
            >
              64 songs ~ 16 hrs+
            </p>
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex gap-2 items-center bg-[#25282c] px-4 py-2 rounded-3xl  ">
                <img src="/playAll.svg" />
                <p className="text-white text-sm">Play all</p>
              </div>
              <div className="flex gap-2 items-center bg-[#25282c] px-4 py-2 rounded-3xl ">
                <img src="/playAllAdd.svg" />
                <p className="text-white text-sm">Add to collection </p>
              </div>
              <div className="flex gap-2 items-center px-4 py-2 rounded-3xl bg-[#25282c]">
                <img src="/playAllHeart.svg" />
                <p className="text-white text-sm">Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-10 relative mt-10  ">
        <div className="mb-4">
          {data.map((item, index) => {
            return (
              <AllSongsMobile
                title={item.title}
                artist={item.artists[0].alias}
                img={item.images.background}
                key={index}
                // duration={convertTime(item.track.duration_ms)}
                onClick={() => setActiveItem(item)}
              />
            );
          })}
        </div>

        <div className="lg:block md:block hidden">
          <div className="mb-6">
            {data.map((item, index) => {
              return (
                <AllSongsDesktop
                  title={item.title}
                  artist={item.artists[0].alias}
                  img={item.images.background}
                  key={index}
                  // duration={convertTime(item.track.duration_ms)}
                  onClick={() => setActiveItem(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default album;
