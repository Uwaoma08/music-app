import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LeftMenu from "../components/LeftMenu";
import TopCharts from "../components/TopCharts";
import NewRelease from "../components/NewRelease";
import Popular from "../components/Popular";
import data from '../data'

export default function Home() {
  return (
    <div className="max-w-[1440px] lg:m-8 md:m-8 relative">
      

      <div className="flex lg:flex-row flex-col w-full ">
        <div className="lg:block md:block hidden md:w-full lg:w-[60px] lg:mr-4">
          <LeftMenu />
        </div>
        <div className="flex-grow lg:mr-6 mr-0 lg:w-full">
          <Hero />
        </div>
        <div className="w-full lg:w-[50%] h-[350px] lg:mt-4 overflow-y-auto scrollbar-hide">
          <TopCharts />
        </div>
      </div>

      <NewRelease />
      <Popular />
     
    </div>
  );
}
