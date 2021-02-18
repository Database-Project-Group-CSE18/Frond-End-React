import React from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import Footer from "../../components/Footer/Footer";
import SearchBarHome from "../../components/SearchBarHome";
import LogIn from "../../components/SignIn/LogIn";

function SignIn() {
  return (
    <>
      <SearchBarHome />

      <LogIn />
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica" />
    </>
  );
}

export default SignIn;
