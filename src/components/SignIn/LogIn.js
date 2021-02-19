import React, { useState } from "react";
import "./LogIn.css";
import FormLogIn from "./FormLogIn";

const LogIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {/**background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/Midwife.jpg') !important;
      background-size: cover !important; */}
      <div className="login-container">
        <div className="login-content-left">
          <img className="login-img" src="img/svg-4.svg" alt="Security" />
        </div>
        <FormLogIn />
      </div>
    </>
  );
};

export default LogIn;
