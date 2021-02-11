import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./LogIn.css";

function FormLogIn(submitForm) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="login-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Welcome!!!
          <br />
          Sign in to continue shopping!
        </h1>
        <div className="login-inputs">
          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="login-inputs">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className="login-input-btn" type="submit">
          Sign In
        </button>
        <span className="login-input-login">
          Don't have an account? Sign up <a href="signup">here</a>
        </span>
      </form>
    </div>
  );
}

export default FormLogIn;
