import React from "react";
import Footer from "../../components/Footer/Footer";
import ShopNow from "../../components/ShopNow";
import Pricing from "../../components/Pricing/Pricing";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import SearchBarHome from "../../components/SearchBarHome";
import ImageSlider from "../../components/Slider/ImageSlider";
import { SliderData } from "../../components/Slider/SliderData";
// import checkLogin from "./checkLogin";
import { useHistory } from 'react-router'
function Home() {
console.log("Home page")
  return (
    <>
    <SearchBarHome />
    <ShopNow />
    
      
      <ImageSlider slides={SliderData} />;
      <Pricing heading=''/>
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica"/>
      
    </>
  );
}

export default Home;
