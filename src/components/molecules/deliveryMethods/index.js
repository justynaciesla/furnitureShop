import React from "react";
import { ErrorMessage } from "formik";
import Img from "../../atoms/img";
import Typography from "@mui/material/Typography";
import DHL from "../../../assets/icons/dhl.png";
import Fedex from "./../../../assets/icons/fedex.png";
import UPS from "../../../assets/icons/ups.png";
import {
  StyledInput,
  StyledLabel,
  StyledWrapperDelivery,
  StyledWrapper,
  StyledErrorMessage,
} from "./StyledDeliveryMethods";

const DeliveryMethods = (values) => {
  return (
    <StyledWrapper>
      <Typography
        variant="h6"
        sx={{ margin: "0px 0px 10px 20px", width: "200px" }}
      >
        2. Delivery Methods
      </Typography>

      <StyledWrapperDelivery
        id="my-radio-group"
        role="group"
        aria-labelledby="my-radio-group"
      >
        <StyledInput
          type="radio"
          id="fedex"
          name="deliveryMethod"
          value="fedex"
        />
        <StyledLabel for="fedex">
          <Img src={Fedex} alt="fedex" width="60px" height="60px" />
          <p>$24</p>
        </StyledLabel>

        <StyledInput type="radio" id="ups" name="deliveryMethod" value="ups" />
        <StyledLabel for="ups">
          <Img src={UPS} alt="ups" width="60px" height="60px" />
          <p>$14</p>
        </StyledLabel>
        <StyledInput type="radio" id="dhl" name="deliveryMethod" value="dhl" />
        <StyledLabel for="dhl">
          <Img src={DHL} alt="dhl" width="60px" height="60px" />
          <p>$14</p>
        </StyledLabel>
        <StyledErrorMessage>
          <ErrorMessage name="deliveryMethod" />
        </StyledErrorMessage>
      </StyledWrapperDelivery>
    </StyledWrapper>
  );
};

export default DeliveryMethods;
