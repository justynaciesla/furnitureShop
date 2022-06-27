import React, { useContext } from "react";
import RootContext from "../../../context";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import DeliveryMethods from "../deliveryMethods/index";
import PaymentMethods from "../paymentMethods/index";
import Typography from "@mui/material/Typography";
import Button from "../../atoms/button";
import Header from "../../atoms/headers";
import {
  StyledField,
  StyledForm,
  StyledWrapper,
  StyledFormWrapper,
  StyledErrorWrapper,
  StyledButtonWrapper,
} from "./StyledShippingInformation";

const shippingInformationValidationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: Yup.string().required("* This field is required").min(3, "Min 3 char"),
  surname: Yup.string().required("* This field is required"),
  address: Yup.string().required("* This field is required"),
  city: Yup.string().required("* This field is required"),
  phoneNumber: Yup.string()
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      "Phone number is not valid"
    )
    .required("* This field is required"),
  deliveryMethod: Yup.string().required("* Please select delivery method"),
  paymentMethod: Yup.string().required("* Please select payment method"),
});

const ShippingInformation = () => {
  const { total } = useContext(RootContext);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          name: "",
          surname: "",
          address: "",
          city: "",
          phoneNumber: "",
          deliveryMethod: "",
          paymentMethod: "",
        }}
        validationSchema={shippingInformationValidationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <StyledForm>
            <StyledFormWrapper>
              <Typography variant="h6" sx={{ margin: "0px 0px 30px 20px" }}>
                1. Shipping Information
              </Typography>
              <StyledWrapper>
                <StyledField
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email address"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="email" />
                </StyledErrorWrapper>
                <StyledField
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="name" />
                </StyledErrorWrapper>
                <StyledField
                  id="surname"
                  type="text"
                  name="surname"
                  placeholder="Surname"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="surname" />
                </StyledErrorWrapper>
                <StyledField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="address" />
                </StyledErrorWrapper>
                <StyledField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="city" />
                </StyledErrorWrapper>
              </StyledWrapper>
            </StyledFormWrapper>
            <DeliveryMethods values={values} />
            <PaymentMethods values={values} />

            <StyledButtonWrapper>
              <Header headerType="h5" margin="auto">
                Total in Cart: {total} $
              </Header>
              <Button loginBtn type="submit">
                PROCEED TO PAYMENT
              </Button>
            </StyledButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ShippingInformation;
