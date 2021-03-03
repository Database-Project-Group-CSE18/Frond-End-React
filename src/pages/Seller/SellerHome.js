import React, { useEffect, useState } from "react";
import BottomFooter from "../../components/Footer/BottomFooter";
import BottomItems from "../../components/Footer/BottomItems";
import Footer from "../../components/Footer/Footer";
import SearchBarHome from "../../components/SearchBarHome";
import Middle from "../../components/Seller/Middle";
import Card from "../../components/Seller/Card";
import { Box, Flex, Heading, Skeleton, Stack } from "@chakra-ui/react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
function SellerHome() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [overview, setOverview] = useState({
    userCount: 0,
    todayRevenue: 0,
    totalRevenue: 0,
    awaitingShipment: 0,
    awaitingDelivery: 0,
  });
  const history = useHistory();
  useEffect(() => {
    Axios.get("http://localhost:5000/customer/login").then((response) => {
      setUser({
        firstName: response.data.user.first_name,
        lastName: response.data.user.last_name,
      });
    });
    Axios.post("http://localhost:5000/seller/overview").then((response) => {
      if (response.data.auth === false) {
        Axios.get(
          "http://localhost:5000/customer/logout"
        ).then((response) => {});
      } else {
        setOverview({
          userCount: response.data.result.userCount,
          todayRevenue: response.data.result.todayRevenue,
          totalRevenue: response.data.result.totalRevenue,
          awaitingShipment: response.data.result.awaitingShipment,
          awaitingDelivery: response.data.result.awaitingDelivery,
        });
      }
    });
  }, []);
  // console.log("SellerHome");

  return (
    <>
      <Middle user={user} overview={overview} />
      <Stack mb="25px" p="10px" pt="90px">
        {/* <Skeleton height="20px" />
                <Skeleton height="10px" /> */}
      </Stack>
      <div className="buttons" p="10px">
        <Card
          imageUrl="./img/svg-1.svg"
          imageAlt="User"
          url="/awaitingshipment"
          type="Awaiting Shipment Orders"
          count="34 new orders received today"
        />
        <Card
          imageUrl="./img/svg-5.svg"
          imageAlt="User"
          url="/awaitingdelivery"
          type="Awaiting Delivery Orders "
          count="20 orders waiting for delivery"
        />
        <Card
          imageUrl="./img/svg-2.svg"
          imageAlt="User"
          url="/allorders"
          type="All Orders"
          count="5100 total orders"
        />
        <Card
          imageUrl="./img/svg-8.svg"
          imageAlt="User"
          url="/categorypage"
          type="My Items"
          count="You have listed 20 items"
        />
        <Card
          imageUrl="./img/svg-6.svg"
          imageAlt="User"
          url="/newitem"
          type="List New Item"
          count=""
        />
        <Heading ml='20px' mb='20px' mt='30px' fontSize = "6xl">Reports</Heading>
        <Card
          imageUrl="./img/svg-7.svg"
          imageAlt="User"
          url="/quarterreport"
          type="Quarterly sales report"
          count=""
        />
        <Card
          imageUrl="./img/svg-8.svg"
          imageAlt="User"
          url="/newitem"
          type="Product category with most orders"
          count=""
        />
        <Card
          imageUrl="./img/svg-7.svg"
          imageAlt="user"
          url="/newitem"
          type="Products with most number of sales in a given period"
          count=""
        />
        <Card
          imageUrl="./img/svg-8.svg"
          imageAlt="user"
          url="/newitem"
          type="Given a product, time period with most interest to it"
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
