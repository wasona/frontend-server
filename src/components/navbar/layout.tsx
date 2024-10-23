import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0rem" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
