import axios from "axios";
import "./style/loginScreen.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate()
  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login"
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate('/')
      })
      .catch((err) => {
        localStorage.setItem("token", "");
        ;
      });
    reset({
      email: "",
      password: "",
    });
  };

  const goToSignUp = () => {
    navigate('/signup')
  }

  return (
    <form className="login__form" onSubmit={handleSubmit(submit)}>
      <h3 className="login__text-title">Welcome! Enter your email and password to continue</h3>
      <ul className="login__test">
        <li className="flex__login-title">
          <h4>Test Data</h4>
        </li>
        <li className="flex__login">
          <b className="login__b"><i className="fa-solid fa-envelope"></i></b> mason@gmail.com
        </li>
        <li className="flex__login">
          <b className="login__b"><i className="fa-solid fa-lock"></i></b> mason1234
        </li>
      </ul>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">
            Email
          </label>
          <input
            type="email"
            className="login__input"
            id="login-email"
            {...register("email")}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">
            Password
          </label>
          <input
            type="password"
            className="login__input"
            id="login-pass"
            {...register("password")}
          />
        </li>
      </ul>
      <div>{isErrorLogin && "Invalid credentials, try again..."}</div>

      <button className="login__btn">Login</button>

      <div className="login__sign-up">
        <p>Don't have an account?</p>
        <button onClick={goToSignUp} className="login__signup-btn">Sign up</button>
      </div>
    </form>
  );
};

export default Form;
