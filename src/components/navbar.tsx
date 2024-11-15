import React from "react";
import "./navbar.css";
import Button from "@components/button";
import DarkModeSvg from "@assets/dark_mode.svg";
import { useAuthStore } from "@store/authStore";
import { goto } from "@utils/goto";

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <nav className="nav">
      <div className="nav-section">
        <span className="logo">Wasona</span>
      </div>
      <div className="nav-section">
        <Button className="dark-mode-toggle">
          <img src={DarkModeSvg} alt="Dark Mode Toggle" />
        </Button>
        <Button filled on={goto(isLoggedIn ? "/auth/profile" : "/auth/login")}>
          {isLoggedIn ? "Profile" : "Sign In"}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
