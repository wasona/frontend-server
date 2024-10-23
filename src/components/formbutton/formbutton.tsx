import React from "react";
import "./formbutton.css"; // This should contain styles applicable to both forms

interface FormButtonProps {
  // Describes the properties that the FormButton component accepts
  children: React.ReactNode; // The content to be displayed inside the button
  type?: "button" | "submit" | "reset"; // The type attribute for the button element, defaults to 'button'
  className?: string; // Additional CSS classes to apply to the button
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  type = "button",
  className = "",
}) => {
  const buttonClass = `form-button ${className}`.trim();
  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};

export default FormButton;
