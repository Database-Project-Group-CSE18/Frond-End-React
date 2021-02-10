import React from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/SignUp/Register";
import SearchBarHome from "../../components/SearchBarHome";

export default function SignUp() {
  return (
    <>
      <SearchBarHome />

      <Register />

      <Footer />
      <BottomFooter shopName="Electrica" />
    </>
  );
}
