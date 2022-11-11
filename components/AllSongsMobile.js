import React from 'react'

const AllSongsMobile = ({img, onClick}) => {
  return (
    <div onClick={onClick} className="h-56px bg-[#25282c] text-white flex flex-row items-center p-3 rounded-lg w-full lg:hidden md:hidden block mb-4">
          <img src={img} className="h-[63px] rounded-2xl" />
          <div className="ml-4 w-full">
            <div className="flex flex-row justify-between w-full mb-2 ">
              <p className="text-sm">Let me love you ~ Krisx</p> <img src="/verticalDot.svg" />
            </div>
            <div className="flex flex-row justify-between w-full ">
              <p className="text-xs">Single</p> <p className="text-sm">4:17</p>
            </div>
          </div>
        </div>
  )
}

export default AllSongsMobile