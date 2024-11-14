import React from "react";
import "./home-blurb.css"; // Import the CSS file
import FormButton from "@components/formbutton/formbutton";
import wasonaImage from "@assets/wasona.svg"; // Import the SVG file

const Blurb: React.FC = () => {
  return (
    <div className="blurb">
      <img src={wasonaImage} alt="Wasona bird!" />
      <div className="blurbTextBox">
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
        <FormButton className="startNow">
          <span className="startNowText">start now</span>
        </FormButton>
      </div>
    </div>
  );
};

export default Blurb;
