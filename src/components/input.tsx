import React from "react";
import "./input.css";

interface Props {
  children: React.ReactNode;
  form: Record<string, string>;
  name: string;
  type: "text" | "email" | "password";
  on: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
}

const Input: React.FC<Props> = ({
  children,
  form,
  name,
  type,
  on,
  optional,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={form[name]}
        onChange={on}
        required={!optional}
      />
    </div>
  );
};

export default Input;
