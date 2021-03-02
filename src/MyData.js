router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

const userAuthenticated = () => {
    Axios.get("http://localhost:5000/customer/isUserAuth", {
    headers: {
      "x-access-token": localStorage.getItem("token")},
    }).then(response => {
      console.log(response.status);
    });
  };
            // Store user in localstorage
          // localStorage.setItem("user2", response.data.result[0]);
          // Cookies.set('user', response.data.result[0], { expires: 1 })
              // Axios.get("http://localhost:5000/customer/login").then((response) => {
    //   if(response.data.LoggedIn === true) {
    //         setLoginStatus(response.data.user[0].First_name + " " + response.data.user[0].Last_name);
    //   }
      
    // });
    
    //If there are no errors and submitted it wil call submitForm function(callback())
    //response.data is an array. message is a attribute of it
      // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get("http://localhost:5000/customer/login").then((response) => {
  //     console.log(response);
  //   })
  // }, [])