import React from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import Footer from "../../components/Footer/Footer";
import SearchBarHome from "../../components/SearchBarHome";
import Middle from "../../components/Seller/Middle";
import Card from "../../components/Seller/Card";
import { Box, Flex, Skeleton, Stack } from "@chakra-ui/react";
import { AiFillExperiment } from "react-icons/ai";

function SellerHome() {
  return (
    <>
    <SearchBarHome />
      <Middle />
      <Stack mb='25px' p='10px'>
                <Skeleton height="40px" />
                <Skeleton height="20px" />
                <Skeleton height="10px" />
              </Stack>
      <div className="buttons" p="10px">
        <Card
          imageUrl="./img/svg-1.svg"
          imageAlt="User"
          type="Awaiting Shipment Orders"
          count="34 new orders received today"
        />
        <Card
          imageUrl="./img/svg-5.svg"
          imageAlt="User"
          type="Awaiting Delivery Orders "
          count="20 orders waiting for delivery"
        />
        <Card
          imageUrl="./img/svg-2.svg"
          imageAlt="User"
          type="All Orders"
          count="5100 total orders"
        />
        <Card
          imageUrl="./img/svg-8.svg"
          imageAlt="User"
          type="My Items"
          count="You have listed 20 items"
        />
        <Card
          imageUrl="./img/svg-6.svg"
          imageAlt="User"
          type="List New Item"
          count=""
        />
      </div>
      <BottomItems />
      <Footer />
      <BottomFooter shopName="Electrica" />
    </>
  );
}

export default SellerHome;
