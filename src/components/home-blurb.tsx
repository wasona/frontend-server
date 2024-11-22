import wasonaImage from "@assets/wasona.svg";
import Button from "@components/button";
import { goto } from "@utils/goto";
import React from "react";
import "./home-blurb.css";

const HomeBlurb: React.FC = () => {
  return (
    <div className="blurb">
      <img src={wasonaImage} alt="Wasona bird!" />
      <div className="blurb-text-box">
        <h1>Wasona welcomes&nbsp;you!</h1>
        <p>Learn&nbsp;Toki&nbsp;Pona with&nbsp;fun&nbsp;exercises!</p>
        <Button filled on={goto("/auth/signup")}>
          start now
        </Button>
      </div>
    </div>
  );
};

export default HomeBlurb;
