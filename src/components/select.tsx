import React from "react";
import "./select.css";

interface Props {
  children: React.ReactNode;
  form: Record<string, string>;
  name: string;
  title: string;
  on: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  optional?: boolean;
}

const Select: React.FC<Props> = ({
  children,
  form,
  name,
  title,
  on,
  optional,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{title}</label>
      <select
        id={name}
        name={name}
        value={form[name]}
        onChange={on}
        required={!optional}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
