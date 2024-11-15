import React from "react";
import "./home-blurb.css";
import Button from "@components/button";
import wasonaImage from "@assets/wasona.svg";

const HomeBlurb: React.FC = () => {
  return (
    <div className="blurb">
      <img src={wasonaImage} alt="Wasona bird!" />
      <div className="blurb-text-box">
        <h1>
          Wasona
          <br />
          welcomes you!
        </h1>
        <p>
          Learn Toki Pona
          <br />
          with fun exercises!
        </p>
        <Button filled>start now</Button>
      </div>
    </div>
  );
};

export default HomeBlurb;
