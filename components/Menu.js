import React from "react";
import HomeIcon from "./Icons/HomeIcon";
import RadioIcon from "./Icons/RadioIcon";
import CollectionsIcon from "./Icons/CollectionsIcon";
import VideoIcon from "./Icons/VideoIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = ({ className, onClickClose }) => {
const router = useRouter()
  
  return (
    <>
      <div
        className={` w-[80%] bg-[#1E1E1E]  z-10 fixed top-0 left-0 pl-10 pt-20 rounded-br-3xl ${className}`}
      >
        <AiOutlineCloseCircle
          onClick={onClickClose}
          className="text-grayColor hover:text-red-400 cursor-pointer text-2xl absolute top-5 left-10"
        />
        <button onClick={()=>{router.push('/'); onClickClose()}} >
          <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10 ">
            <HomeIcon className=" group-hover:fill-yellowColor" />
            <h2 className="group-hover:text-primaryColor">Home</h2>
          </div>
        </button>

        <button onClick={()=>{router.push('/my-collections'); onClickClose()}} >
          <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10 ">
            <CollectionsIcon className=" group-hover:fill-yellowColor group-hover:text-yellowColor " />
            <h2 className="group-hover:text-primaryColor">My Collections</h2>
          </div>
        </button>
        <button onClick={()=>{router.push('/album'); onClickClose()}} >
        <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10">
          <RadioIcon className=" group-hover:fill-yellowColor group-hover:text-yellowColor " />{" "}
          <h2 className="group-hover:text-primaryColor">Radio</h2>
        </div>
        </button>
       
        <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10 ">
          <VideoIcon className=" group-hover:fill-yellowColor group-hover:text-yellowColor " />{" "}
          <h2 className="group-hover:text-primaryColor">Music Videos</h2>
        </div>
        
        <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10 ">
          <ProfileIcon className=" group-hover:fill-yellowColor group-hover:text-yellowColor " />{" "}
          <h2 className="group-hover:text-primaryColor">Profile</h2>
        </div>

        <div className="flex flex-row gap-6 items-center text-lg text-grayColor font-bold group mb-10 ">
          <LogoutIcon className=" group-hover:fill-yellowColor group-hover:text-yellowColor " />{" "}
          <h2 className="group-hover:text-primaryColor">Log out</h2>
        </div>
      </div>
    </>
  );
};

export default Menu;
