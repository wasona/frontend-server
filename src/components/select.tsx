import React from "react";
import "./select.css";

interface Props {
  children: React.ReactNode;
  form: Record<string, string>;
  key: string;
  name: string;
  on: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  optional?: boolean;
}

const Select: React.FC<Props> = ({
  children,
  form,
  key,
  name,
  on,
  optional,
}) => {
  return (
    <div className="input">
      <label htmlFor={key}>{name}</label>
      <select
        id={key}
        name={key}
        value={form[key]}
        onChange={on}
        required={!optional}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
