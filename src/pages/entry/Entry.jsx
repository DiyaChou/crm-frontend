import React, { useState } from "react";
import "./Entry.style.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleSubmit = () => {
    if (!email || !password) alert("fill the form completely");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="entry">
      {frmLoad === "login" && (
        <div className="form_wrapper">
          <h1 className="form__title">Client Login</h1>
          <hr />
          <form className="entry__form">
            <div className="form__container">
              <label className="form__label" htmlFor="client_email">
                Email
              </label>
              <input
                className="form__input"
                type="email"
                placeholder="Enter Email"
                id="client_email"
                value={email}
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="form__container">
              <label className="form__label" htmlFor="client_password">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                placeholder="Password"
                id="client_password"
                value={password}
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <button className="form__submit" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <hr />
          <div>
            <a href="#" onClick={() => setFrmLoad("reset")}>
              Forgot password?
            </a>
          </div>
        </div>
      )}

      {frmLoad === "reset" && (
        <div className="form_wrapper">
          <h1 className="form__title">Reset Password</h1>
          <hr />
          <form className="form">
            <div className="form__container">
              <label className="form__label" htmlFor="client_email">
                Email
              </label>
              <input
                className="form__input"
                type="email"
                placeholder="Enter Email"
                id="client_email"
                value={email}
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <button className="form__submit">submit</button>
          </form>
          <hr />
          <div>
            <a href="#" onClick={() => setFrmLoad("login")}>
              Go back
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Entry;
