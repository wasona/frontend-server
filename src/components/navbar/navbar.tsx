import React from "react";
import "./navbar.css"; // Import the CSS file
import FormButton from "../formbutton/formbutton";
import DarkModeSvg from "../../assets/dark_mode.svg";
import { useAuthStore } from "../../store/authStore";

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <nav>
      <div className="nav-section">
        <span className="logo">Wasona</span>
      </div>
      <div className="nav-section">
        {
          <FormButton
            className="dark-mode-toggle"
            children={
              <>
                <img src={DarkModeSvg} alt="Dark Mode Toggle" />
              </>
            }
          ></FormButton>
        }
        {isLoggedIn ? (
          <FormButton className="profile">
            <span className="profile-text">Profile</span>
          </FormButton>
        ) : (
          <FormButton className="sign-in">
            <span className="sign-in-text">Sign In</span>
          </FormButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
