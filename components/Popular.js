import React from "react";
import Release from "./Release";
import data from "../data";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="mt-10">
      <h1 className="text-white text-2xl font-bold mb-4 lg:text-left text-center  ">
        Popular in your area
      </h1>
      <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
        {data.playlist[1].items.map((item, index) => {
          return (
            <Link
              key={index}
              href={{ pathname: "/album", query: {anything: index, anotherthing: 1 } }}
            >
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

export default Popular;
