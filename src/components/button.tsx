import React from "react";
import "./button.css"; // This should contain styles applicable to both forms

interface FormButtonProps {
  // Describes the properties that the FormButton component accepts
  children: React.ReactNode;
  type?: "button" | "submit" | "reset"; // The type attribute for the button element, defaults to 'button'
  filled?: boolean;
  className?: string; // Additional CSS classes to apply to the button
}

const Button: React.FC<FormButtonProps> = ({
  children,
  type = "button",
  filled = false,
  className = "",
}) => {
  const buttonClass = `${filled ? "filled" : "outlined"} ${className}`.trim();
  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
