import React from "react";
import P from "../../atoms/p";
import { StyledRowWrapper } from "./StyledPriceRow";

const PriceRow = ({ title, price }) => {
  return (
    <StyledRowWrapper>
      <P fontSize="15px" color="grey">
        {title}
      </P>
      <P fontSize="15px" color="black">
        {price} $
      </P>
    </StyledRowWrapper>
  );
};

export default PriceRow;
