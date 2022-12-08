import React, { useState, useContext } from "react";
import Release from "./Release";
import NewData from "./NewData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";
import { PlayingNowContext } from "../contexts/PlayingNowContext";

const NewRelease = () => {

  const {setMusic} = useContext(PlayingNowContext);
  const router = useRouter()
  const goNextPage = (theMusic)=>{
    setMusic(theMusic)
    return router.push("/album")
  }
  const newReleaseData = NewData[1].item;

  // const query = useQuery("newReleaseApi", ()=>{
  //   return axios("https://musica-api.up.railway.app/new",)
  // }, {refetchOnWindowFocus: false})

  // if(query.isLoading){
  //   return <h1>Loading...</h1>
  // }

  // if(query.isError){
  //   return <h1>There is error in your fetching process, please try again</h1>
  // }

  // console.log(query);

  return (
    <div className="mt-10 w-full">
      <h1 className="text-white text-2xl font-bold mb-4 lg:text-left text-center  ">
        New Release
      </h1>
      <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
        {newReleaseData.map((item, index) => {
          return (
         <div onClick={()=>goNextPage(item)}>
              <Release
                title={item.title}
                artist={item.artists[0].alias}
                img={item.images.background}
                key ={index}
              />
           </div> 
          );
        })}
      </div>
    </div>
  );
};

export default NewRelease;
