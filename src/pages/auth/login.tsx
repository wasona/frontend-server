import React, { useState } from "react";
import axios from "axios";
import CenteredForm from "@components/centered-form";
import Input from "@components/input";
import Button from "@components/button";

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

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const backendPort = import.meta.env.VITE_BACKEND_PORT;

      if (!backendUrl || !backendPort) {
        alert(
          "Backend URL or port is missing. Please check your environment variables.",
        );
        return;
      }

      const response = await axios.post(
        `${backendUrl}:${backendPort}/auth/login`,
        { ...form, keepLoggedIn: true },
      );

      console.log("Login successful", response.data);
      alert("Login successful!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        alert(
          `Server error: ${error.response.data.codeName}\n\n${JSON.stringify(error.response.data.error)}`,
        );
      } else if (error instanceof Error) {
        alert("Network error: " + error.message);
      } else {
        alert("An unexpected error occurred: " + error);
      }
    }
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
      <Input form={form} key="userEmail" type="email" on={handleChange}>
        Email
      </Input>
      <Input form={form} key="userPw" type="password" on={handleChange}>
        Password
      </Input>
      <Button filled>Login</Button>
    </form>
    <Button filled>Sign Up</Button>
  </>
);
