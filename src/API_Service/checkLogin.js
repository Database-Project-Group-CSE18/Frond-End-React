import Axios from "axios";


function checkAuthorization (callback) {
    Axios.get("http://localhost:5000/customer/login")
    .then((response) => {
      if(response.data.LoggedIn === true) {
        console.log(response.data);
        callback(response.data.LoggedIn);
      }else{
        callback(false)
      }
      });
} 

function checkAuthentication (callback) {
        Axios.get("http://localhost:5000/customer/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token")},
        }).then(response => {
          if(response.status == 200) {
              callback(true)
          } else {
              callback(false);
          }
        });
}

// function checkLoggedIn(callback) {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [LoggedIn, setLoggedIn] = useState(false);
//   checkAuthorization(response => {
//     setIsAuthorized(response);
//   })
//   checkAuthentication(response => {
//     setIsAuthenticated(response);
//   })

//   if (isAuthorized === isAuthenticated) {
//     setLoggedIn(true);
//   } else {
//     setLoggedIn(false);
//   }
//   callback(LoggedIn);
// }

export default {
  checkAuthorization,
  checkAuthentication
}