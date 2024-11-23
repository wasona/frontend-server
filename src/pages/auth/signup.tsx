import Button from "@components/button";
import CenteredForm from "@components/centered-form";
import Input from "@components/input";
import Select from "@components/select";
import { CountriesResponseT } from "@models/api/countries";
import { CountriesT } from "@models/countries";
import { wasona } from "@utils/wasona";
import React, { useEffect, useState } from "react";

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

    const { confirm, ...signupDataToSend } = form;
    await wasona("post", "/auth/signup", signupDataToSend);
  };

  useEffect(() => {
    (async () => {
      const response = await wasona<CountriesResponseT>(
        "get",
        "/iso/countries",
      );
      if (response) {
        const sortedCountries = response!.data!.sort(
          // countriesList name removed
          (a: CountriesT, b: CountriesT) =>
            (a.country_name_english ?? "").localeCompare(
              b.country_name_english ?? "",
            ),
        );
        setCountries(sortedCountries);
      }
    })();
  }, []);

  return (
    <CenteredForm>
      <SignupForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        countries={countries}
      />
    </CenteredForm>
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
    userSubnational: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  countries: CountriesT[];
}) => (
  <form onSubmit={handleSubmit}>
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
