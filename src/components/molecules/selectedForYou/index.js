import React, { useContext } from "react";
import RootContext from "../../../context";
import Header from "../../atoms/headers";
import Img from "../../atoms/img";
import Button from "../../atoms/button";
import Link from "../../atoms/link";
import {
  StyledWrapper,
  StyledSelectedProductsWrapper,
  StyledDiv,
  ProductDescriptionWrapper,
  StyledButtonWrapper,
  StyledHr,
  StyledProductWrapper,
} from "./StyledSelectedForYou";

const SelectedForYou = () => {
  const { products } = useContext(RootContext);
  let selectedForYou = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <StyledWrapper>
      <Header headerType="h6" margin="120px auto 40px auto">
        SELECTED FOR YOU
      </Header>
      <StyledSelectedProductsWrapper>
        {selectedForYou.map((item) => (
          <StyledProductWrapper>
            <StyledDiv>
              <Img productImg alt="furniture" src={item.image} />
            </StyledDiv>
            <ProductDescriptionWrapper>
              <Link
                to={{
                  pathname: `/products/${item.name}`,
                  state: { ...item },
                }}
              >
                <Header
                  headerType="h6"
                  color="#878787"
                  margin="15px 0px 5px 0px"
                >
                  {item.name}
                </Header>
              </Link>
              <Header headerType="h6" fontSize="17px">
                ${item.price}
              </Header>
            </ProductDescriptionWrapper>
          </StyledProductWrapper>
        ))}
      </StyledSelectedProductsWrapper>
      <StyledButtonWrapper>
        <StyledHr />

        <Link to="/products">
          <Button loginBtn>GO TO SHOP</Button>
        </Link>

        <StyledHr />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default SelectedForYou;
