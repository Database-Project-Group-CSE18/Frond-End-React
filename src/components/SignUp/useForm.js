import { useState, useEffect } from "react";
import Axios from "axios";
//custom hook

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstName = values.firstname;
  const lastName = values.lastname;
  const email = values.email;
  const phoneNumber = values.phonenumber;
  const password = values.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0) {
      Axios.post("http://localhost:5000/customer/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  useEffect(() => {
    //If there are no errors and submitted it wil call submitForm function(callback())
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
