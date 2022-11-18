import React from 'react'

const AllSongsMobile = ({img, onClick, title, artist, duration,}) => {
  return (
    <div onClick={onClick} className="h-56px bg-[#25282c] hover:bg-[#444c57] text-white  flex-row items-center p-3 rounded-lg w-full lg:hidden md:hidden flex mb-4">
          <img src={img} className="h-[63px] rounded-2xl" />
          <div className="ml-4 w-full">
            <div className="flex flex-row justify-between w-full mb-2 ">
              <p className="text-sm">{title}</p> <img src="/verticalDot.svg" />
            </div>
            <div className="flex flex-row justify-between w-full ">
              <p className="text-xs">{artist}</p> <p className="text-sm">{duration}</p>
            </div>
          </div>
        </div>
  )
}

export default AllSongsMobile