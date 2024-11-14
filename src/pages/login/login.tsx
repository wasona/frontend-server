import React, { useState } from "react";
import axios from "axios";
import "./login.css";

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
        form,
      );

      console.log("Login successful", response.data);
      alert("Login successful!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Server error: ${error.response.data.message}`);
      } else if (error instanceof Error) {
        alert("Network error: " + error.message);
      } else {
        alert("An unexpected error occurred: " + error);
      }
    }
  };

  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
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
  <form className="login-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <div className="form-group">
      <label htmlFor="userEmail">Email</label>
      <input
        type="email"
        id="userEmail"
        name="userEmail"
        value={form.userEmail}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="userPw">Password</label>
      <input
        type="password"
        id="userPw"
        name="userPw"
        value={form.userPw}
        onChange={handleChange}
        required
      />
    </div>
    <div className="button-container">
      <div className="button-half">
        <button type="submit" className="button-style">
          Login
        </button>
      </div>
      <div className="button-half">
        <a href="/auth/signup" className="button-like">
          Sign Up
        </a>
      </div>
    </div>
  </form>
);
