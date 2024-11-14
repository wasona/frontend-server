import React from "react";
import "./navbar.css"; // Import the CSS file
import FormButton from "@components/formbutton";
import DarkModeSvg from "@assets/dark_mode.svg";
import { useAuthStore } from "@store/authStore";

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
          <button
            className="profile"
            onClick={() => (window.location.href = "/auth/profile")}
          >
            <span className="profile-text">Profile</span>
          </button>
        ) : (
          <button
            className="sign-in"
            onClick={() => (window.location.href = "/auth/login")}
          >
            <span className="sign-in-text">Sign In</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
