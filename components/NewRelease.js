import React, { useState } from "react";
import Release from "./Release";
import data from "../data";
import Link from "next/link";

const NewRelease = () => {
  return (
    <div className="mt-10 w-full">
      <h1 className="text-white text-2xl font-bold mb-4 lg:text-left text-center  ">
        New Release
      </h1>
      <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
        {data.playlist[0].items.map((item, index) => {
          return (
            <Link href={{pathname: "/album", query: 1}}>
              {" "}
              <Release
                title={item.track.name}
                artist={item.track.artists[0].name}
                img={item.track.album.images[0].url}
                key={index}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewRelease;
