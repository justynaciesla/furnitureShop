import React, { useContext } from "react";
import RootContext from "../../../context";
//import { data } from "../../../localData/data";
import ProductListItem from "../ProductListItem/index";
import { StyledUl, StyledLi } from "./StyledProductList";

const ProductList = () => {
  const { products } = useContext(RootContext);
  return (
    <StyledUl>
      {products.map((item) => (
        <StyledLi key={item.id}>
          <ProductListItem item={item} {...item} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ProductList;
