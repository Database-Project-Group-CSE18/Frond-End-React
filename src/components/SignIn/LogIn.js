import React, { useEffect, useState } from "react";
import "./LogIn.css";
import FormLogIn from "./FormLogIn";
import FormSuccess from "./FormSuccess";
import Axios from "axios";
import { Redirect } from "react-router-dom";




const LogIn = () => {

  
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get("http://localhost:5000/customer/login").then((response) => {
  //     console.log(response);
  //   })
  // }, [])

  return (
    <>
      {/**background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/Midwife.jpg') !important;
    background-size: cover !important; <Redirect to='/' />*/}
      <div className="login-container">
        <div className="login-content-left">
          <img className="login-img" src="img/svg-2.svg" alt="Security" />
        </div>
        {/* {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} />
        ) : (
          <Redirect to='/' />
        )} */}
        <FormLogIn submitForm={submitForm} />
      </div>
    </>
  );
};

export default LogIn;
