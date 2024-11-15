import React from "react";
import "./button.css";

interface FormButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  filled?: boolean;
  className?: string;
  on?: () => void;
}

const Button: React.FC<FormButtonProps> = ({
  children,
  type = "button",
  filled = false,
  className = "",
  on,
}) => {
  const buttonClass = `${filled ? "filled" : "outlined"} ${className}`.trim();
  return (
    <button onClick={on} type={type} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
