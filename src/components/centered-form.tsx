import React from "react";
import "./centered-form.css";

interface Props {
  children: React.ReactNode;
}

const CenteredForm: React.FC<Props> = ({ children }) => {
  return <div className="centered-form">{children}</div>;
};

export default CenteredForm;
