import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style/signUp.css";

const SignUpScreen = () => {
  const { register, handleSubmit } = useForm();
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const navigate = useNavigate();

  const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users";
  const submit = (data) => {
    data.role = "admin";
    console.log(data);
    if (
      !(
        data.firstName === "" ||
        data.lastName === "" ||
        data.email === "" ||
        data.password === "" ||
        data.phone === "" ||
        data.role === ""
      )
    ) {
      axios
        .post(URL, data)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          setIsErrorLogin(true);
          setTimeout(() => {
            setIsErrorLogin(false);
          }, 5000);
        });
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit(submit)} className="signup__form">
        <h2 className="signup__title">Sing Up</h2>
        <div className="signup__item">
          <label htmlFor="first_name" className="signup__label">First Name</label>
          <input className="signup__input" type="text" id="first_name" {...register("firstName")} />
        </div>
        <div className="signup__item">
          <label htmlFor="last_name" className="signup__label">Last Name</label>
          <input className="signup__input" type="text" id="last_name" {...register("lastName")} />
        </div>
        <div className="signup__item">
          <label htmlFor="email" className="signup__label">Email</label>
          <input className="signup__input" type="email" id="email" {...register("email")} />
        </div>
        <div className="signup__item">
          <label htmlFor="password" className="signup__label">Password</label>
          <input className="signup__input" type="password" id="password" {...register("password")} />
        </div>
        <div className="signup__item">
          <label htmlFor="phone" className="signup__label">Phone (10 characters)</label>
          <input
            type="text"
            className="signup__input"
            id="phone"
            maxLength={11}
            minLength={10}
            {...register("phone")}
          />
        </div>
        <button className="signup__btn">create</button>

        <div>{isErrorLogin && "Invalid credentials, try again..."}</div>
      </form>
    </div>
  );
};

export default SignUpScreen;
