import React from "react";
import Layout from "../components/Layout";
import LeftMenu from "../components/LeftMenu";
import data from "../data";

const MyCollections = () => {
  return (
    <Layout playingNow={data}>
    <div className="flex flex-row w-full gap-6 ">
      <div className="lg:block md:block hidden">
        <LeftMenu />
      </div>
      <div className="w-full">
        <div className="flex flex-row lg:justify-start md:justify-start justify-center  gap-4 mb-10">
          <button className="hover:bg-yellow-200 px-7 py-2 text-gray-700 bg-[#1E1E1E] text-sm rounded-3xl border border-gray-700 w-[178px]">
            My collection
          </button>
          <button className="hover:bg-yellow-200 px-7 py-2 text-gray-700 bg-[#1E1E1E] text-sm rounded-3xl border border-gray-700 w-[178px]">
            Likes
          </button>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col gap-10 md:overflow-x-auto md:shrink-0 scrollbar-hide">
          <CollectionBox img="bg-[url('/collectionImage1.svg')]" />
          <CollectionBox img="bg-[url('/collectionImage2.svg')]" />
          <CollectionBox img="bg-[url('/collectionImage3.svg')]" />
          <CollectionBox img="bg-[url('/collectionImage2.svg')]" />
          <CollectionBox img="bg-[url('/collectionImage3.svg')]" />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default MyCollections;

const CollectionBox = ({ img }) => {
  return (
    <div
      className={`lg:w-[213px] md:w-[213px] w-full h-[234px] bg-gray-700 ${img}  rounded-2xl p-5 bg-cover hover:border-2 border-blue-400 shrink-0  `}
    >
      <div className="flex flex-row justify-between items-end  max-w-full">
        <div className="">
          <div className="pt-20 mb-8 font-light lg:pt-[130px] md:pt-[130px]">
            <h2 className="text-2xl text-white ">Limits</h2>
            <p className="text-xs text-gray-300">John watts</p>
          </div>
          <p className="text-base text-white font-light lg:hidden md:hidden block ">2.3m likes</p>
        </div>
        <div className="lg:hidden md:hidden block">
          <img src="/playIcon.svg" />
        </div>
      </div>
    </div>
  );
};
