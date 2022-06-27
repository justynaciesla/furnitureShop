import React from "react";
import { StyledWrapper, StyledH6 } from "./StyledShoppingCartHeader";

const ShoppingCartHeader = () => {
  return (
    <StyledWrapper>
      <StyledH6>PRODUCT</StyledH6>
      <StyledH6>PRICE</StyledH6>
      <StyledH6>QTY</StyledH6>
      <StyledH6>TOTAL</StyledH6>
    </StyledWrapper>
  );
};

export default ShoppingCartHeader;
