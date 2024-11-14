import React from "react";
import "./home.css";
import Navbar from "@components/navbar";
import HomeBlurb from "@components/home-blurb";
import WidthLimiter from "@components/width-limiter";
import FullscreenLayout from "@components/fullscreen-layout";

const Home: React.FC = () => {
  return (
    <FullscreenLayout>
      <Navbar />
      <WidthLimiter>
        <HomeBlurb />
      </WidthLimiter>
      <p>
        This site is free and open source (AGPL). The course is Creative Commons
        (CC-BY-SA). Help us by contributing on Github!
      </p>
    </FullscreenLayout>
  );
};

export default Home;
