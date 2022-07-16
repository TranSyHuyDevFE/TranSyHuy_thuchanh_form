import React from "react";
import { useState } from "react";
import "../components/styles.css";
export default function Form() {
  const REGEX_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const REGEX_PHONE = /^[0-9\-+]{9,15}$/;
  const [form, setForm] = useState({});
  const [errorEmail, setErroremail] = useState();
  const [errorPhone, setErrorphone] = useState();
  const [errorName, setErrorName] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const validateEmail = (email) => {
    return email.match(REGEX_EMAIL);
  };
  const validatePhone = (email) => {
    return email.match(REGEX_PHONE);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      if (value.length < 6) {
        setErrorName("User Name should be less than 6 character");
        return;
      }
      if (value.length > 10) {
        setErrorName("Too Long!");
        return;
      }
      if (value.length > 6) {
        setErrorName("Ok!");
      }
    }
    if (name === "password") {
      if (value.length < 6) {
        setErrorPassword("Password should be less than 6 character");
        return;
      }
      if (value.length > 10) {
        setErrorPassword("Too Long!");
        return;
      }
      if (value.length > 6) {
        setErrorPassword("Ok!");
      }
    }
    if (name === "email") {
      if (!validateEmail(value)) {
        setErroremail("Email Valid!");
        return;
      } else {
        setErroremail("Ok!");
      }
    }
    if (name === "phone") {
      if (!validatePhone(value)) {
        setErrorphone("Phone Valid!");
        return;
      } else {
        setErrorphone("Ok!");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    if (form.password !== form.cfpassword) {
      e.preventDefault();
      alert("Password not match, try again!");
      return;
    }
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.cfpassword
    ) {
      alert("Error!");
      return true;
    }
    e.preventDefault();
    console.log(form);
  };
  const renderValidationUserName = () => {
    if (errorName) {
      return <p>{errorName}</p>;
    }
    return null;
  };
  const renderValidationPassword = () => {
    if (errorPassword) {
      return <p>{errorPassword}</p>;
    }
    return null;
  };

  const renderValidationEmail = () => {
    if (errorEmail) {
      return <p>{errorEmail}</p>;
    }
    return null;
  };
  const renderValidationPhone = () => {
    if (errorPhone) {
      return <p>{errorPhone}</p>;
    }
    return null;
  };
  return (
    <div>
      <div className="container">
        <form>
          <h1>Login Form</h1>
          <div className="form-control">
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Username"
            />
            {renderValidationUserName()}
          </div>
          <div className="form-control">
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            {renderValidationEmail()}
            <small />
            <span />
          </div>
          <div className="form-control">
            <input
              id="phone"
              type="phone"
              name="phone"
              onChange={handleChange}
              placeholder="Phone"
            />
            {renderValidationPhone()}
            <small />
            <span />
          </div>
          <div className="form-control">
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            {renderValidationPassword()}
            <small />
            <span />
          </div>
          <div className="form-control">
            <input
              id="confirm-password"
              type="password"
              name="cfpassword"
              onChange={handleChange}
              placeholder="Confirm password"
            />

            <small />
            <span />
          </div>
          <button type="submit" onClick={onHandleSubmit} className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
