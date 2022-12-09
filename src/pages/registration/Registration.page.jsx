import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlertBox from "../../components/AlertBox/AlertBox.comp";
import { newUserRegistration } from "./registration.action";
import { resetRegisterState } from "./registration.slice";
import "./registration.style.css";

const Registration = () => {
  const initialUserFormData = {
    name: "Diya choudhury",
    company: "abc",
    address: "abcd, efg, india",
    phone: "7894561230",
    email: "diya@gmail.com",
    password: "Abcd@123",
    confirmPassword: "Abcd@123",
  };

  const passVerificationError = {
    isLengthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecialCharacters: false,
    confirmPassword: false,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState(initialUserFormData);
  const [passwordError, setPasswordError] = useState(passVerificationError);
  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });

    if (name === "password") {
      const isLengthy = value.length >= 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialCharacters = /[@, #, $, &, %]/.test(value);
      // const confirmPass;

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpecialCharacters,
      });
    }

    if (name === "confirmPassword") {
      setPasswordError({
        ...passwordError,
        confirmPassword: userFormData.password === value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = userFormData;
    dispatch(newUserRegistration(rest));
  };
  useEffect(() => {
    return () => {
      dispatch(resetRegisterState());
    };
  }, [dispatch]);

  return (
    <div className="registeration">
      <div className="form_wrapper">
        <h1 className="form__title">Client Registeration</h1>
        <hr />
        {message && (
          <AlertBox
            variant={status === "error" ? "error" : "success"}
            text={message}
          />
        )}

        <form
          method="post"
          className="registeration__form"
          // onSubmit={handleSubmit}
        >
          <div className="form__container">
            <label className="form__label" htmlFor="client_name">
              name
            </label>
            <input
              className="form__input"
              type="name"
              placeholder="Enter name"
              id="client_name"
              value={userFormData.name}
              name="name"
              onChange={handleOnChange}
            />
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="client_company">
              company
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Enter company"
              id="client_company"
              value={userFormData.company}
              name="company"
              onChange={handleOnChange}
            />
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="client_address">
              address
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Enter address"
              id="client_address"
              value={userFormData.address}
              name="address"
              onChange={handleOnChange}
            />
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="client_phone">
              phone
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Enter phone"
              id="client_phone"
              value={userFormData.phone}
              name="phone"
              onChange={handleOnChange}
            />
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="client_email">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              placeholder="Enter Email"
              id="client_email"
              value={userFormData.email}
              name="email"
              onChange={handleOnChange}
            />
          </div>

          <div style={{ display: "flex" }}>
            <div className="form__container">
              <label className="form__label" htmlFor="client_password">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                placeholder="Password"
                id="client_password"
                value={userFormData.password}
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <div className="form__container">
              <label className="form__label" htmlFor="client_confirmPassword">
                confirm password
              </label>
              <input
                className="form__input"
                type="password"
                placeholder="New Password"
                id="client_confirmPassword"
                value={userFormData.confirmPassword}
                name="confirmPassword"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <ul>
            <li
              className={
                passwordError.isLengthy ? "text-approved" : "text-danger"
              }
            >
              Min 8 characters
            </li>
            <li
              className={
                passwordError.hasUpper ? "text-approved" : "text-danger"
              }
            >
              At least one upper case
            </li>
            <li
              className={
                passwordError.hasLower ? "text-approved" : "text-danger"
              }
            >
              At least one lower case
            </li>
            <li
              className={
                passwordError.hasNumber ? "text-approved" : "text-danger"
              }
            >
              At least one number
            </li>
            <li
              className={
                passwordError.hasSpecialCharacters
                  ? "text-approved"
                  : "text-danger"
              }
            >
              At least one of the special characters like: @, #, $, &, %
            </li>
          </ul>

          <button
            className="form__submit"
            type="button"
            disabled={Object.values(passwordError).includes(false)}
            onClick={handleSubmit}
          >
            Register
          </button>
          {/* {isLoading && <img src={Spinner} alt="loading" />} */}
        </form>
        <div>
          <span>Already have an account? </span>
          <a href="#" onClick={() => navigate("/")}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
