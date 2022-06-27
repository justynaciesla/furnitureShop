import React, { useContext } from "react";
import RootContext from "../../../context";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import Button from "../../atoms/button";
import Plus from "../../../assets/icons/plus.png";
import Minus from "../../../assets/icons/minus.png";
import Bin from "../../../assets/icons/trash.png";
import {
  StyledProductWrapper,
  StyledImgContainer,
  StyledItemWrapper,
} from "./StyledProductListItemInCart";

const ProductListItemInCart = ({ id, name, price, image, inCartQuantity }) => {
  const { removeFromCart, incrementQty, decrementQty } =
    useContext(RootContext);
  return (
    <>
      <StyledProductWrapper>
        <StyledImgContainer>
          <Img productInCart src={image} />
        </StyledImgContainer>
        <Header headerType="h6" fontSize="15px">
          {name}
        </Header>
      </StyledProductWrapper>

      <StyledItemWrapper>
        <Header headerType="h6" fontSize="15px">
          ${price}
        </Header>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <Button btnInCart onClickFn={() => decrementQty(id)}>
          <Img src={Minus} height="10px" width="10px" />
        </Button>
        <Header headerType="h6" fontSize="15px">
          {inCartQuantity}
        </Header>
        <Button btnInCart onClickFn={() => incrementQty(id)}>
          <Img src={Plus} height="10px" width="10px" />
        </Button>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <Header headerType="h6" fontSize="15px">
          ${price * inCartQuantity}
        </Header>
      </StyledItemWrapper>

      <StyledItemWrapper>
        <Button btnInCart onClickFn={() => removeFromCart(id)}>
          <Img src={Bin} width="15px" height="15px" />
        </Button>
      </StyledItemWrapper>
    </>
  );
};

export default ProductListItemInCart;
