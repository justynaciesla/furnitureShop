import React from "react";
import Header from "../../atoms/headers";
import P from "../../atoms/p";
import Img from "../../atoms/img";
import Button from "../../atoms/button";
import Link from "../../atoms/link";
import EmptyShoppingCart from "../../../assets/icons/emptyCart.png";
import { EmptyShoppingCartWrapper } from "./StyledEmptyCart";

const EmptyCart = () => {
  return (
    <EmptyShoppingCartWrapper>
      <Img
        src={EmptyShoppingCart}
        alt="Empty"
        width="150px"
        height="150px"
        margin="0px 0px 30px 0px"
      />
      <Header headerType="h5" margin="0px 0px 10px 0px">
        Your Cart is Empty
      </Header>
      <P fontSize="20px" color="#a9a7a7">
        Looks like you haven't
      </P>
      <P fontSize="20px" color="#a9a7a7">
        added anything to your cart yet
      </P>
      <Button emptyCartBtn>
        <Link linkType="link" to="/products" color="white">
          Start Shopping
        </Link>
      </Button>
    </EmptyShoppingCartWrapper>
  );
};

export default EmptyCart;
