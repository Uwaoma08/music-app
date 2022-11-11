import React from "react";

const Release = ({ title, artist, img, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col shrink-0 items-center w-[153px] ">
      <img src={img} className="rounded-2xl" />{" "}
      <div className="mt-4">
        <h3 className="text-lg text-white leading-5">{title}</h3>
        <p className="text-grayColor text-base">{artist}</p>

      </div>
    </div>
  );
};
export default Release;
