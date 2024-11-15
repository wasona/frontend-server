import React, { useState } from "react";
import CenteredForm from "@components/centered-form";
import Input from "@components/input";
import Button from "@components/button";
import { wasona } from "@utils/wasona";

export const Login = () => {
  const [form, setForm] = useState({
    userEmail: "",
    userPw: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await wasona("post", "/auth/login", { ...form, keepLoggedIn: true });
  };

  return (
    <CenteredForm>
      <LoginForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </CenteredForm>
  );
};

export default Login;

const LoginForm = ({
  form,
  handleChange,
  handleSubmit,
}: {
  form: {
    userEmail: string;
    userPw: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Input form={form} name="userEmail" type="email" on={handleChange}>
        Email
      </Input>
      <Input form={form} name="userPw" type="password" on={handleChange}>
        Password
      </Input>
      <Button type="submit" filled>
        Login
      </Button>
    </form>
    <Button filled>Sign Up</Button>
  </>
);
