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
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              href={{ pathname: "/album", query: {anything: index } }}
            >
              {" "}
              <Release
                title={item.title}
                artist={item.artists[0].alias}
                img={item.images.background}
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
