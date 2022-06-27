import React from "react";
import Header from "../../components/atoms/headers";
import ShippingInformation from "../../components/molecules/shippingInformation";

const Checkout = () => {
  return (
    <>
      <Header headerType="h3" margin="20px 0px 20px 20px">
        Checkout
      </Header>
      <ShippingInformation />
    </>
  );
};

export default Checkout;
