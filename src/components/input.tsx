import React from "react";
import "./input.css";

interface Props {
  children: React.ReactNode;
  form: Record<string, string>;
  key: string;
  type: "text" | "email" | "password";
  on: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
}

const Input: React.FC<Props> = ({
  children,
  form,
  key,
  type,
  on,
  optional,
}) => {
  return (
    <div className="input">
      <label htmlFor={key}>{children}</label>
      <input
        type={type}
        id={key}
        name={key}
        value={form[key]}
        onChange={on}
        required={!optional}
      />
    </div>
  );
};

export default Input;
