import React, { useState } from 'react';
import './Register.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    {/**background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../img/Midwife.jpg') !important;
    background-size: cover !important; */}
      <div className='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='img/svg-2.svg' alt='Security' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Register;
