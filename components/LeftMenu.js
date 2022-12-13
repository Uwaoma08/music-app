import React from "react";
import Link from "next/link";
import HomeIcon from "./Icons/HomeIcon";
import RadioIcon from "./Icons/RadioIcon";
import CollectionsIcon from "./Icons/CollectionsIcon";
import VideoIcon from "./Icons/VideoIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import { useRouter } from 'next/router'

const LeftMenu = () => {

  const router = useRouter()
   const ActiveLink = ({ children, href })=>{
  
    const style = {
      color: router.pathname === href ? 'red' : 'black',
    }
  
  }
  console.log(router.pathname)
    

  return (
    <div className=" w-[50px] lg:inline-block top-28 left-6 md:inline-block hidden  ">
      <div className="bg-bg2 rounded-full p-3 mb-6   lg:flex lg:flex-col flex-row items-center  ">
        <div className="mb-8 mt-2 md:mt-0 md:mr-10 lg:mx-0 lg:mb-8 lg:mr-0 lg:ml-0 lg:pl-0 lg:pr-0">
         <Link href="/">  <HomeIcon className={`hover:fill-yellowColor hover:text-yellowColor ${router.pathname == '/' ? 'text-yellowColor' && 'fill-yellowColor'  : ''} `} /></Link>
        </div>
        <div className="mb-8  md:mr-10 lg:mx-0 lg:mb-8">
         <Link href="/my-collections"> <CollectionsIcon className={`hover:fill-yellowColor hover:text-yellowColor ${router.pathname == '/my-collections' ? 'text-yellowColor' : ''} `} /></Link>
        </div>
        <div className="mb-8  md:mr-10 lg:mx-0 lg:mb-8">
        <Link href="/album">  <RadioIcon className={`hover:fill-yellowColor hover:text-yellowColor ${router.pathname == '/album' ? 'text-yellowColor'   : ''} `}/></Link>
        </div>
        <div className="mb-4  md:mr-4 md:mb-0 lg:mx-0 ">
          <VideoIcon className="hover:fill-yellowColor hover:text-yellowColor" />
        </div>
      </div>
      <div className="bg-bg2 rounded-full p-3 md:mb-0 items-center flex lg:flex-col md:block ">
        <div className="mb-8 mt-2 md:mt-0 md:mr-10  lg:mx-0 lg:mb-8 lg:mr-0 lg:ml-0 lg:pl-0 lg:pr-0 ">
          <ProfileIcon className="hover:fill-yellowColor" />
        </div>
        <div className="mb-8 mt-2 md:mt-0 md:mr-10 md:mb-0 lg:mx-0  lg:mr-0 lg:ml-0 lg:pl-0 lg:pr-0">
          <LogoutIcon className="hover:fill-yellowColor" />
        </div>
      </div>
    </div>
  );

};

export default LeftMenu;
