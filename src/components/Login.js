import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import * as auth from "../utils/auth.js";
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext'
// import "./styles/Login.css";

const Login = ({ onLogin }) => {
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    onLogin(userData);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="sign-form">
      <form className="sign-form__field" onSubmit={handleSubmit}>
        <div className="sign-form__area">
          <h3 className="sign-form__title">Log In</h3>
          <label className="sign-form__input">
            <input
              className="sign-form__textfield"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleEmailChange} required />
          </label>
          <label className="sign-form__input">
            <input className="sign-form__textfield"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange} required/>
          </label>
        </div>
        <div className="sign-form__area">
          <button className="sign-form__button" type="submit">
            Sign Up
          </button>
          <p className="sign-form__text">
            Already a member? {' '}
            <Link className="sign-form__link" to="/signin">
              Log in here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

    export default Login;
