import { useState, useEffect } from "react";
import Axios from "axios";
//custom hook

const useForm = (callback, validate) => {
  Axios.defaults.withCredentials = true;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const email = values.email;
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
      Axios.post("http://localhost:5000/customer/login", {
        email: email,
        password: password,
      }).then((response) => {
        if (!response.data.auth) {
          console.log(response);
          setLoginStatus(false);
          
        } else {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
        }
      });
    }
  };
const userAuthenticated = () => {
    Axios.get("http://localhost:5000/customer/isUserAuth", {
    headers: {
      "x-access-token": localStorage.getItem("token")},
    }).then(response => {
      console.log(response.status);
    });
  };

  useEffect(() => {
    // Axios.get("http://localhost:5000/customer/login").then((response) => {
    //   if(response.data.LoggedIn === true) {
    //         setLoginStatus(response.data.user[0].First_name + " " + response.data.user[0].Last_name);
    //   }
      
    // });
    
    //If there are no errors and submitted it wil call submitForm function(callback())
    //response.data is an array. message is a attribute of it
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
     }
  }, [errors]);

  return { handleChange, handleSubmit, userAuthenticated, values, errors, loginStatus };
};

export default useForm;
