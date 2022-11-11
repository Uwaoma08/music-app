import React from "react";
import LeftMenu from "./LeftMenu";
import Header from "./Header";
import Menu from "./Menu";
import MusicPlayer from "./MusicPlayer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <MusicPlayer/>
    </div>
  );
};

export default Layout;
