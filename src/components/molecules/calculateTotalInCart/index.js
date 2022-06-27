import React, { useContext } from "react";
import RootContext from "../../../context";
import PriceRow from "../../molecules/priceRow";
import CheckoutButton from "../checkoutButton";
import { StyledCheckoutWrapper, StyledHr } from "./StyledCalculateTotal";

const CalculateTotalInCart = () => {
  const { delivery, total, subtotal } = useContext(RootContext);
  return (
    <StyledCheckoutWrapper>
      <PriceRow title="SUBTOTAL" price={subtotal} />
      <PriceRow title="SHIPPING" price={delivery} />
      <StyledHr />
      <PriceRow title="TOTAL" price={total} />

      <CheckoutButton />
    </StyledCheckoutWrapper>
  );
};

export default CalculateTotalInCart;
