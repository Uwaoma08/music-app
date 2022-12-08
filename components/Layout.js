import React from "react";

import Header from "./Header";
import MusicPlayer from "./MusicPlayer";

const Layout = ({ children, playingNow }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;
