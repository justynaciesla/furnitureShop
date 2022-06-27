import React from "react";
import { Formik, ErrorMessage } from "formik";
import Header from "../../atoms/headers";
import Button from "../../atoms/button";
import Img from "../../atoms/img";
import Bed from "../../../assets/icons/bed.png";
import Lamp from "../../../assets/icons/floor-lamp.png";
import Sofa from "../../../assets/icons/sofa.png";
import Table from "../../../assets/icons/round-table.png";
import Arrow from "../../../assets/icons/right-arrows.png";
import {
  StyledFieldWrapper,
  StyledLabel,
  StyledField,
  StyledNameSurnameFiledsWrapper,
  StyledPhoneEmailFieldsWrapper,
  StyledContactWrapper,
  StyledWrapper,
  StyledImgWrapper,
  StyledMessageField,
  StyledMessageFieldWrapper,
  StyledCheckboxField,
  StyledCheckboxFieldWrapper,
  StyledErrorWrapper,
  StyledErrorWrapperTerms,
  StyledForm,
} from "./styled/StyledContactForm";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const contactFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("* This field is required")
    .min(3, "Min 3 char"),
  lastName: Yup.string().required("* This field is required"),
  email: Yup.string()
    .required("* This field is required")
    .email("Invalid email"),
  subject: Yup.string().required("* This field is required"),
  message: Yup.string().required("* This field is required"),
  acceptTerms: Yup.bool().oneOf([true], "* You have to accept terms first"),
});

//  const StyledField = styled(Field)
const ContactForm = () => {
  return (
    <StyledWrapper>
      <StyledContactWrapper>
        <Header headerType="h1" margin="50px 0px 50px 0px">
          We'd love to <span>{<br />}</span> hear from you
        </Header>
        <StyledImgWrapper>
          <Img
            src={Bed}
            width="150px"
            height="150px"
            margin="0px 20px 0px 0px"
          />
          <Img
            src={Lamp}
            width="150px"
            height="150px"
            margin="0px 20px 0px 0px"
          />
          <Img
            src={Sofa}
            width="150px"
            height="150px"
            margin="0px 20px 0px 0px"
          />
          <Img
            src={Table}
            width="150px"
            height="150px"
            margin="0px 20px 0px 0px"
          />
        </StyledImgWrapper>
      </StyledContactWrapper>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={contactFormValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          emailjs
            .send(
              process.env.REACT_APP_EMAIL_SERVICE,
              process.env.REACT_APP_EMAIL_TEMPLATE,
              values,
              process.env.REACT_APP_USER_ID
            )
            .then(() => alert("OK"))
            .catch((err) => console.log(err));

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <StyledForm>
            <Header headerType="h3" margin="50px 0px 20px 83px">
              Contact us
            </Header>
            <StyledNameSurnameFiledsWrapper>
              <StyledFieldWrapper>
                <StyledLabel htmlFor="firstName">FIRST NAME</StyledLabel>
                <StyledField
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="firstName" />
                </StyledErrorWrapper>
              </StyledFieldWrapper>
              <StyledFieldWrapper>
                <StyledLabel htmlFor="lastName">LAST NAME</StyledLabel>
                <StyledField
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="lastName" />
                </StyledErrorWrapper>
              </StyledFieldWrapper>
            </StyledNameSurnameFiledsWrapper>
            <StyledPhoneEmailFieldsWrapper>
              <StyledFieldWrapper>
                <StyledLabel htmlFor="subject">SUBJECT</StyledLabel>
                <StyledField
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="subject" />
                </StyledErrorWrapper>
              </StyledFieldWrapper>
              <StyledFieldWrapper>
                <StyledLabel htmlFor="email">EMAIL</StyledLabel>
                <StyledField
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <StyledErrorWrapper>
                  <ErrorMessage name="email" />
                </StyledErrorWrapper>
              </StyledFieldWrapper>
            </StyledPhoneEmailFieldsWrapper>
            <StyledMessageFieldWrapper>
              <StyledLabel htmlFor="email">MESSAGE</StyledLabel>
              <StyledMessageField
                type="text"
                as="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
              <StyledErrorWrapper>
                <ErrorMessage name="message" />
              </StyledErrorWrapper>
            </StyledMessageFieldWrapper>
            <StyledCheckboxFieldWrapper>
              <StyledCheckboxField
                id="terms"
                type="checkbox"
                name="acceptTerms"
                checked={values.acceptTerms}
                value={values.acceptTerms}
                onChange={handleChange}
              />
              <StyledLabel htmlFor="terms">Accept terms</StyledLabel>
            </StyledCheckboxFieldWrapper>
            <StyledErrorWrapperTerms>
              <ErrorMessage name="acceptTerms" />
            </StyledErrorWrapperTerms>

            <Button submitBtn type="submit">
              SUBMIT
              <Img
                src={Arrow}
                width="20px"
                height="20px"
                margin="0px 0px 0px 10px"
              />
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default ContactForm;
