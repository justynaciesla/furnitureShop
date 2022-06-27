import React, { useContext } from "react";
import RootContext from "../../../context";
import P from "../../atoms/p";
import Button from "../../atoms/button";
import Link from "../../atoms/link";
import { StyledRowWrapper } from "./StyledCheckoutButton";

const CheckoutButton = () => {
  const { total } = useContext(RootContext);
  return (
    <Link linkType="link" to="/checkout">
      <Button checkoutBtn>
        <StyledRowWrapper>
          <P fontSize="20px" color="white">
            Checkout
          </P>
          <P fontSize="20px" color="white">
            {total} $
          </P>
        </StyledRowWrapper>
      </Button>
    </Link>
  );
};

export default CheckoutButton;
