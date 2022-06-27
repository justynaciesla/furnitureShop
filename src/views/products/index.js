import React from "react";
import ProductList from "../../components/molecules/productList";
import ProductFilter from "../../components/organisms/productFilter";
import Header from "../../components/atoms/headers";

import { StyledWrapper, StyledFilterProductsWrapper } from "./StyledProducts";

const Products = () => {
  return (
    <>
      <StyledWrapper backgroundColor="#d1e9e3" width="83%" margin="-40px auto">
        <Header headerType="h4" margin="65px 10px 65px 0px" fontWeight="600">
          Discover
        </Header>
        <Header headerType="h4" fontWeight="400" margin="65px 0px 65px 0px">
          the best
        </Header>
      </StyledWrapper>
      <StyledFilterProductsWrapper>
        <ProductFilter />
        <ProductList />
      </StyledFilterProductsWrapper>
    </>
  );
};

export default Products;
