import React, { useContext } from "react";
import RootContext from "../../../context";
import { Formik, ErrorMessage } from "formik";
import Show from "../../../assets/icons/show.png";
import Hide from "../../../assets/icons/hide.png";
import Header from "../../atoms/headers";
import Button from "../../atoms/button";
import P from "../../atoms/p";
import Img from "../../atoms/img";
import Link from "../../atoms/link";
import {
  StyledLoginWrapper,
  StyledPWrapper,
  StyledField,
  StyledWrapper,
  StyledErrorWrapper,
  StyledForm,
  StyledInputWrapper,
  StyledShowPasswordButton,
  StyledFieldPassword,
} from "./styled/StyledLoginForm";
import * as Yup from "yup";

const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("* This field is required")
    .email("Invalid email"),
  password: Yup.string()
    .required("* This field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "* Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),
});

const LoginForm = () => {
  const { isPasswordShownInLogin, showHidePassword } = useContext(RootContext);
  return (
    <StyledWrapper>
      <StyledLoginWrapper>
        <Header headerType="h6" letterSpacing="2px" margin="40px 0px 0px 0px">
          Sign in with your email
        </Header>
        <StyledPWrapper>
          <P margin="0px 5px 0px 0px" color="#878787">
            Don't have an account?{" "}
          </P>
          <Link linkType="link" to="/signup">
            <P color="#44cf9f">Sign up</P>
          </Link>
        </StyledPWrapper>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginFormValidationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <StyledForm>
              <StyledField
                id="email"
                type="text"
                name="email"
                placeholder="Email address"
              />
              <StyledErrorWrapper>
                <ErrorMessage name="email" />
              </StyledErrorWrapper>
              <StyledInputWrapper>
                <StyledFieldPassword
                  id="password"
                  type={isPasswordShownInLogin ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <StyledShowPasswordButton
                  onClick={() => showHidePassword("password")}
                  type="button"
                >
                  <Img
                    alt="show"
                    src={isPasswordShownInLogin ? Hide : Show}
                    width="30px"
                    height="30px"
                  />
                </StyledShowPasswordButton>
              </StyledInputWrapper>

              <StyledErrorWrapper>
                <ErrorMessage name="password" />
              </StyledErrorWrapper>

              <Button loginBtn type="submit">
                LOGIN
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledLoginWrapper>
    </StyledWrapper>
  );
};

export default LoginForm;
