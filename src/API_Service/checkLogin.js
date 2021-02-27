import Axios from "axios";
import Cookies from "js-cookie"

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
          if(response.status === 200) {
              callback(true)
          } else {
              callback(false);
          }
        });
}
function isAuthenticated(){
  Axios.get("http://localhost:5000/customer/login")
    .then((response) => {
      console.log('is authenticated')
      if(response.data.LoggedIn == true) {
        console.log(response.data)
        return true;
      }else{
        return false;
      }
      });
}

function clearCookie(){
  Cookies.remove("user");
}
function isLoggedIn(){
  if(Cookies.get("user") === undefined) {
    return false;
  }
  return true;

}
function getData(){
  if(Cookies.get("user") === undefined) {
    return null;
  }
  return JSON.parse(Cookies.get("user"))
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
  checkAuthentication,
  isLoggedIn,
  isAuthenticated,
  getData,
  clearCookie
}