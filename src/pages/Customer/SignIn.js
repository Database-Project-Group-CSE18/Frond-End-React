import React, { useEffect } from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import Footer from "../../components/Footer/Footer";
import SearchBarHome from "../../components/SearchBarHome";
import LogIn from "../../components/SignIn/LogIn";
import service from "../../API_Service/checkLogin";
import Axios from "axios";

function SignIn(props) {

  // const [isAuthorized, setIsAuthorized] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const [LoggedIn, setLoggedIn] = useState(false);
  // checkAuthorization(response => {
  //   setIsAuthorized(response);
  // })
  // checkAuthentication(response => {
  //   setIsAuthenticated(response);
  // })

  // if (isAuthorized === isAuthenticated) {
  //   setLoggedIn(true);
  // } else {
  //   setLoggedIn(false);
  // }
  
  
  return (
    <>
      <SearchBarHome />

      <LogIn setSignInClicked={props.setSignInClicked}/>
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica" />
    </>
  );
}

export default SignIn;
