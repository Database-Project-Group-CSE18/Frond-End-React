import React from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/SignUp/Register";
import SearchBarHome from "../../components/SearchBarHome";
import BottomItems from "../../components/Footer/BottomItems";

export default function SignUp() {
  return (
    <>
      <SearchBarHome />

      <Register />
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica" />
    </>
  );
}
