import React, { useState } from "react";
import axios from "axios";
import Button from "@components/button"; // import the FormButton component
import Input from "@components/input";
import Select from "@components/select";
import CenteredForm from "@components/centered-form";

export const Signup = () => {
  const [form, setForm] = useState({
    userEmail: "",
    userPw: "",
    confirm: "",
    userName: "",
    userPhone: "",
    userCountry: "",
    userSubnational: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.userPw !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { confirm, ...signupDataToSend } = form;
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const backendPort = import.meta.env.VITE_BACKEND_PORT;

      if (!backendUrl || !backendPort) {
        alert(
          "Backend URL or port is missing. Please check your environment variables.",
        );
        return;
      }

      const response = await axios.post(
        `${backendUrl}:${backendPort}/auth/signup`,
        signupDataToSend,
      );
      console.log("Signup successful", response.data);
      alert("Signup successful!");
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
      <SignupForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </CenteredForm>
  );
};

export default Signup;

const SignupForm = ({
  form,
  handleChange,
  handleSubmit,
}: {
  form: {
    userEmail: string;
    userPw: string;
    confirm: string;
    userName: string;
    userPhone: string;
    userCountry: string;
    userSubnational: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <Input form={form} key="userName" type="text" on={handleChange}>
      Username
    </Input>
    <Input form={form} key="userEmail" type="email" on={handleChange}>
      Email
    </Input>
    <Input form={form} key="userPw" type="password" on={handleChange}>
      Password
    </Input>
    <Input form={form} key="confirm" type="password" on={handleChange}>
      Confirm Password
    </Input>
    <Input form={form} key="userPhone" type="text" on={handleChange}>
      Phone
    </Input>
    <Select form={form} key="userCountry" name="Country" on={handleChange}>
      <option value="">Select your country</option>
      <option value="USA">United States</option>
    </Select>
    <Select
      form={form}
      key="userSubnational"
      name="Subnational"
      on={handleChange}
    >
      <option value="">Select your state/province</option>
      <option value="CA">California</option>
      <option value="TX">Texas</option>
      <option value="ON">New York</option>
    </Select>
    <Button filled>Sign Up</Button>
  </form>
);
