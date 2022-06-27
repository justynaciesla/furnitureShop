import React, { useContext } from "react";
import RootContext from "../../../context";
import ShoppingCartHeader from "../../molecules/shoppingCartHeader";
import ProductListItemInCart from "../productListItemInCart";
import { StyledLi, StyledUl, StyledHr } from "./StyledProductListInCart";

const ProductListInCart = () => {
  const { cart } = useContext(RootContext);
  return (
    <>
      <ShoppingCartHeader />
      <StyledHr />

      <StyledUl>
        {cart.map((item) => (
          <StyledLi key={item.id}>
            <ProductListItemInCart {...item} />
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
};

export default ProductListInCart;
