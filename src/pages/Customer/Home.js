import React from "react";
import Footer from "../../components/Footer/Footer";
import ShopNow from "../../components/ShopNow";
import Pricing from "../../components/Pricing/Pricing";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import SearchBarHome from "../../components/SearchBarHome";

function Home() {
  return (
    <>
    <SearchBarHome />
    <ShopNow />
    
      <Pricing heading=''/>
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica"/>
      
    </>
  );
}

export default Home;
