import React from "react";

import {
  StyledRadiobuttonInput,
  StyledRadiobuttonLabel,
  StyledRadiobbutonWrapper,
} from "./StyledDeliveryRadiobutton";

const DeliveryRadiobutton = ({ type, id, name, value, htmlFor, label }) => {
  return (
    <StyledRadiobbutonWrapper>
      <StyledRadiobuttonInput type={type} id={id} name={name} value={value} />
      <StyledRadiobuttonLabel htmlFor={htmlFor}>{label}</StyledRadiobuttonLabel>
    </StyledRadiobbutonWrapper>
  );
};

export default DeliveryRadiobutton;
