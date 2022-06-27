import React from "react";
import { ErrorMessage } from "formik";
import Img from "../../atoms/img";
import Typography from "@mui/material/Typography";
import PayPal from "../../../assets/icons/paypal.png";
import Visa from "../../../assets/icons/visa.png";
import MasterCard from "../../../assets/icons/maestro.png";
import AmericanExpress from "../../../assets/icons/american-express.png";
import {
  StyledInput,
  StyledLabel,
  StyledWrapper,
  StyledFormWrapper,
  StyledErrorWrapper,
} from "./StyledPaymentMethods";

const PaymentMethods = (values) => {
  return (
    <StyledFormWrapper>
      <Typography
        variant="h6"
        sx={{ margin: "0px 0px 10px 20px", width: "200px" }}
      >
        3. Payment Methods
      </Typography>
      <StyledWrapper
        id="my-radio-group"
        role="group"
        aria-labelledby="my-radio-group"
      >
        <StyledInput
          type="radio"
          id="paypal"
          name="paymentMethod"
          value="paypal"
        />
        <StyledLabel for="paypal">
          <Img src={PayPal} alt="paypal" width="60px" height="60px" />
        </StyledLabel>

        <StyledInput type="radio" id="visa" name="paymentMethod" value="visa" />
        <StyledLabel for="visa">
          <Img src={Visa} alt="visa" width="60px" height="60px" />
        </StyledLabel>
        <StyledInput
          type="radio"
          id="MasterCard"
          name="paymentMethod"
          value="MasterCard"
        />
        <StyledLabel for="MasterCard">
          <Img src={MasterCard} alt="MasterCard" width="60px" height="60px" />
        </StyledLabel>

        <StyledInput
          type="radio"
          id="AmericanExpress"
          name="paymentMethod"
          value="AmericanExpress"
        />
        <StyledLabel for="AmericanExpress">
          <Img
            src={AmericanExpress}
            alt="AmericanExpress"
            width="60px"
            height="60px"
          />
        </StyledLabel>
        <StyledErrorWrapper>
          <ErrorMessage name="paymentMethod" />
        </StyledErrorWrapper>
      </StyledWrapper>
    </StyledFormWrapper>
  );
};

export default PaymentMethods;
