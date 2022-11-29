import React, { useState } from "react";
import Release from "./Release";
import data from "../data";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";




const NewRelease = () => {

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
        {data.map((item, index) => {
         
          return (
            <Link
              key={index}
              href={{ pathname: "/album", query: { anything: index } }}
            >
              {" "}
              <Release
                title={item.title}
                artist={item.artists[0].alias}
                img={item.images.background}
              />
            </Link>
          );
        })}
       
      </div>
    </div>
   
  );
};

export default NewRelease;
