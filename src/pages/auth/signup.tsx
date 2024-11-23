import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { CountriesT } from "../../models/signup_models";

export const Signup = () => {
  const [form, setForm] = useState({
    userEmail: "",
    userPw: "",
    confirm: "",
    userName: "",
    userPhone: "",
    userCountry: "",
  });

  const [countries, setCountries] = useState<CountriesT[]>([]);

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
      const { ...signupDataToSend } = form;
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      if (!backendUrl) {
        alert(
          "Backend URL is missing. Please check your environment variables.",
        );
        return;
      }

      const response = await axios.post(
        `${backendUrl}/auth/signup`,
        signupDataToSend,
      );
      console.log("Signup successful", response.data);
      alert("Signup successful!");
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

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        if (!backendUrl) {
          alert(
            "Backend URL is missing. Please check your environment variables.",
          );
          return;
        }

        const response = await axios.get(`${backendUrl}/iso/countries`);
        const data = response.data;

        if (data.success) {
          const sortedCountries = data.data.sort( // countriesList name removed
            (a: CountriesT, b: CountriesT) =>
              (a.country_name_english ?? "").localeCompare(
                b.country_name_english ?? "",
              ),
          );
          setCountries(sortedCountries);
        } else {
          alert(`Error fetching countries: ${data.message}`);
        }
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

    fetchCountries();
  }, []);

  return (
    <SignupForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      countries={countries}
    />
  );
};

const SignupForm = ({
  form,
  handleChange,
  handleSubmit,
  countries,
}: {
  form: {
    userEmail: string;
    userPw: string;
    confirm: string;
    userName: string;
    userPhone: string;
    userCountry: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  countries: CountriesT[];
}) => (
  <form className="signup-form" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <div className="form-group">
      <label htmlFor="userName">Username</label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={form.userName}
        onChange={handleChange}
        required
      />
    </div>
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
    <div className="form-group">
      <label htmlFor="confirm">Confirm Password</label>
      <input
        type="password"
        id="confirm"
        name="confirm"
        value={form.confirm}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="userPhone">Phone</label>
      <input
        type="text"
        id="userPhone"
        name="userPhone"
        value={form.userPhone}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="userCountry">Country</label>
      <select
        id="userCountry"
        name="userCountry"
        value={form.userCountry}
        onChange={handleChange}
        required
      >
        <option value="">Select your country</option>
        {countries.map((country) => (
          <option
            key={country.country_iso_3166_1_alpha3}
            value={country.country_iso_3166_1_alpha3}
          >
            {country.country_flag_emoji
              ? `${country.country_flag_emoji} - ${country.country_name_english}`
              : country.country_name_english}
          </option>
        ))}
      </select>
    </div>
    <button type="submit">Sign Up</button>
  </form>
);
