import Axios from "axios";
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({
  Auth: auth,
  seller: seller,
  component: Component,
  ...rest
}) {
  console.log("Protected route is loaded " + auth.isLoggedIn);
  if (isLoggedIn) {
    //if logged in
    return (
      <Route
        {...rest}
        render={(props) => {
          // Seller
          if (userID == 1) {
            // Authorized pages
            if (true) {
              console.log("User is a seller and he authorized to go to this page");
              return <Component />;
            } else {
            // Unauthorized pages
              console.log("Seller cannot access user web sites");
              return (
                <Redirect
                  to={{ pathname: "/sellerHome", state: { from: props.location } }}
                />
              );
            }
          // Customer
          } else {
            if (Page == "cart" || Page == "custDash" || Page == "shppingAddress" || Page == "changeDetails" || Page == "orderView" || Page == "feedback" || Page == "cardDetails" || Page == "trackOrder" || Page == "allOrders") {
              console.log("User is a Customer and he authorized to go to this page");
              return <Component />;
            } else {
              console.log("Customer is unauthorized to go here");
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
            }
            
          }
        }}
      />
    );
  } else {
    //if not logged in
    return (
      <Route
        {...rest}
        render={(props) => {
          // Sign In and Sign up
          if (Page == "signin" || Page == "signup") {
            console.log("User does not have an account and he authorized to go to this page");
            return <Component />;
          } else {
            return (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            );
          }
        }}
      />
    );
  }
}

export default ProtectedRoute;
