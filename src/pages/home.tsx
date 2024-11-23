import FullscreenLayout from "@components/fullscreen-layout";
import HomeBlurb from "@components/home-blurb";
import Navbar from "@components/navbar";
import WidthLimiter from "@components/width-limiter";
import React from "react";

export const Home: React.FC = () => {
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
