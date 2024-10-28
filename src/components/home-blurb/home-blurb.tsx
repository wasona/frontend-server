import React from "react";
import "./home-blurb.css"; // Import the CSS file
import FormButton from "../formbutton/formbutton";

const Blurb: React.FC = () => {
  return (
    <div className="blurb">
      <img src="src/assets/wasona.svg" alt="Wasona bird!" />
      <div className="blurbTextBox">
        <h1>
          Wasona
          <br />
          welcomes you!</h1>
        <p>
          Learn Toki Pona
          <br />
          with fun exercises!
        </p>
        <FormButton className="startNow">
          <span className="startNowText">get started</span>
        </FormButton>
      </div>
    </div>
  );
};

export default Blurb;
