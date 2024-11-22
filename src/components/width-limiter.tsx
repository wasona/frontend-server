import React from "react";
import "./width-limiter.css";

interface Props {
  children: React.ReactNode;
}

const WidthLimiter: React.FC<Props> = ({ children }) => {
  return <div className="width-limiter">{children}</div>;
};

export default WidthLimiter;
