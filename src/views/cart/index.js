import React, { useContext } from "react";
import RootContext from "../../context";
import Header from "../../components/atoms/headers";
import Button from "../../components/atoms/button";
import Img from "../../components/atoms/img";
import P from "../../components/atoms/p";
import Link from "../../components/atoms/link";
import ProductListInCart from "../../components/molecules/ProductListInCart/index";
import CartTotal from "../../components/organisms/cartTotal";
import EmptyCart from "../../components/molecules/emptyCart";
import Back from "../../assets/icons/back.png";
import { StyledCartWrapper, StyledButtonWrapper } from "./StyledCart";

const Cart = () => {
  const { cart } = useContext(RootContext);
  return (
    <>
      <StyledCartWrapper
        backgroundColor="#d1e9e3"
        width="83%"
        margin="-40px auto"
      >
        <Header headerType="h4" margin="65px 10px 65px 50px" fontWeight="600">
          My Cart
        </Header>
        <Button
          color="black"
          backgroundColor="white"
          borderRadius="20px"
          width="230px"
          margin="0px 50px 0px 0px"
          border="none"
        >
          <Link linkType="link" to="/products">
            <StyledButtonWrapper>
              <Img src={Back} alt="back" iconImg />
              <P fontSize="15px" fontWeight="600">
                Continue shopping
              </P>
            </StyledButtonWrapper>
          </Link>
        </Button>
      </StyledCartWrapper>

      <>
        {cart.length > 0 ? (
          <>
            <ProductListInCart />
            <CartTotal />
          </>
        ) : (
          <EmptyCart />
        )}
      </>
    </>
  );
};

export default Cart;
