import React from "react";
import HeartIcon from "./Icons/HeartIcon";

const AllSongsDesktop = ({ img, title, artist, duration, onClick }) => {
  return (
    <div onClick={onClick} className="h-56px bg-[#25282c] hover:bg-[#444c57] text-white flex justify-between items-center px-5 py-3 rounded-2xl w-[90%] lg:ml-20 ml-10 cursor-pointer mb-6 ">
      <div className="flex flex-row items-center gap-6">
        <img src={img} className="h-[63px]" />
        <HeartIcon />
      </div>

      <p className="text-sm">{title}</p>

      <p className="text-sm">{artist}</p>

      <p className="text-sm">{duration}</p>

      <img src="/verticalDot.svg" />
    </div>
  );
};

export default AllSongsDesktop;
