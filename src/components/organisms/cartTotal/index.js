import React from "react";
import DeliverySelect from "../../molecules/deliverySelect";
import CalculateTotalInCart from "../../molecules/calculateTotalInCart";
import { StyledWrapper } from "./StyledCartTotal";

const CartTotal = () => {
  return (
    <StyledWrapper>
      <DeliverySelect />
      <CalculateTotalInCart />
    </StyledWrapper>
  );
};

export default CartTotal;
