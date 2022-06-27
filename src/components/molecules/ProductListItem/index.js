import React from "react";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import { StyledDiv, ProductDescriptionWrapper } from "./StyledProductListItem";
import AddToCartButtons from "../addToCartButtons";

const ProductListItem = ({ item }) => {
  const { name, image, price } = item;
  return (
    <>
      <StyledDiv>
        <Img productImg alt="furniture" src={image} />
        <AddToCartButtons item={item} />
      </StyledDiv>
      <ProductDescriptionWrapper>
        <Header headerType="h6" color="#878787" margin="15px 0px 5px 0px">
          {name}
        </Header>
        <Header headerType="h6" fontSize="17px">
          ${price}
        </Header>
      </ProductDescriptionWrapper>
    </>
  );
};

export default ProductListItem;
