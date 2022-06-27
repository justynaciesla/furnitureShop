import React, { useContext } from "react";
import RootContext from "../../context";
import Img from "../../components/atoms/img";
import Header from "../../components/atoms/headers";
import P from "../../components/atoms/p";
import Button from "../../components/atoms/button";
import {
  StyledSingleProductWrapper,
  StyledSingleProductDescription,
  StyledProductDescriptionWrapper,
  StyledImgWrapper,
  StyledDescriptionWrapper,
  StyledTitleWrapper,
  StyledPriceWrapper,
  StyledButtonWrapper,
  StyledWrapper,
} from "./StyledSingleProducts";

const SingleProduct = ({
  location: {
    state: { id, name, image, price, description, category },
  },
}) => {
  const { addToCart } = useContext(RootContext);
  return (
    <div>
      <StyledWrapper></StyledWrapper>

      <StyledSingleProductWrapper>
        <StyledImgWrapper>
          <Img src={image} alt="Product" height="300px" width="400px"></Img>
        </StyledImgWrapper>
        <StyledSingleProductDescription></StyledSingleProductDescription>

        <StyledProductDescriptionWrapper>
          <StyledTitleWrapper>
            <Header headerType="h3" fontWeight="500">
              {name}
            </Header>
          </StyledTitleWrapper>
          <StyledPriceWrapper>
            <Header headerType="h5" fontWeight="400">
              ${price}
            </Header>
          </StyledPriceWrapper>
          <StyledButtonWrapper>
            <Button
              width="100%"
              color="white"
              backgroundColor="#f33c46"
              borderRadius="10px"
              border="none"
              height="50px"
              onClickFn={() => addToCart(id)}
            >
              <P fontSize="15px" fontWeight="600" color="white">
                BUY NOW
              </P>
            </Button>
          </StyledButtonWrapper>
          <StyledDescriptionWrapper>
            <P fontSize="15px" color="grey">
              Shipping
            </P>
            <P fontSize="15px" margin="0px 0px 0px 0px">
              8-9 weeks.
            </P>
          </StyledDescriptionWrapper>

          <StyledDescriptionWrapper>
            <P fontSize="15px" color="grey">
              Description
            </P>
            <P fontSize="15px">{description}</P>
          </StyledDescriptionWrapper>
        </StyledProductDescriptionWrapper>
      </StyledSingleProductWrapper>
    </div>
  );
};

export default SingleProduct;
