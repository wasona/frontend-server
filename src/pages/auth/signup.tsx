import React, { useState } from "react";
import Button from "@components/button"; // import the FormButton component
import Input from "@components/input";
import Select from "@components/select";
import CenteredForm from "@components/centered-form";
import { wasona } from "@utils/wasona";

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

    const { confirm, ...signupDataToSend } = form;
    await wasona("post", "/auth/signup", signupDataToSend);
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
    <Input form={form} name="userName" type="text" on={handleChange}>
      Username
    </Input>
    <Input form={form} name="userEmail" type="email" on={handleChange}>
      Email
    </Input>
    <Input form={form} name="userPw" type="password" on={handleChange}>
      Password
    </Input>
    <Input form={form} name="confirm" type="password" on={handleChange}>
      Confirm Password
    </Input>
    <Input form={form} name="userPhone" type="text" on={handleChange}>
      Phone
    </Input>
    <Select form={form} name="userCountry" title="Country" on={handleChange}>
      <option value="">Select your country</option>
      <option value="USA">United States</option>
    </Select>
    <Select
      form={form}
      name="userSubnational"
      title="Subnational"
      on={handleChange}
    >
      <option value="">Select your state/province</option>
      <option value="CA">California</option>
      <option value="TX">Texas</option>
      <option value="ON">New York</option>
    </Select>
    <Button type="submit" filled>
      Sign Up
    </Button>
  </form>
);
