import React from "react";
import "./fullscreen-layout.css";

interface Props {
  children: React.ReactNode;
}

const FullscreenLayout: React.FC<Props> = ({ children }) => {
  return <div className="fullscreen-layout">{children}</div>;
};

export default FullscreenLayout;
