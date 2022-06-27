import React, { useContext } from "react";
import RootContext from "../../../context";
import { Formik, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Show from "../../../assets/icons/show.png";
import Hide from "../../../assets/icons/hide.png";
import Link from "../../atoms/link";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import Button from "../../atoms/button";
import P from "../../atoms/p";
import {
  StyledLoginWrapper,
  StyledPWrapper,
  StyledField,
  StyledWrapper,
  StyledCheckboxFieldWrapper,
  StyledCheckboxField,
  StyledLabel,
  StyledErrorWrapper,
  StyledForm,
  StyledFieldPassword,
  StyledInputWrapper,
  StyledShowPasswordButton,
} from "./styled/StyledSignupForm.js";
import * as Yup from "yup";
import { auth } from "../../../firebase/config";
import { useHistory } from "react-router-dom";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { routes } from "../../../routes/index";

const signupFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("* This field is required"),
  lastName: Yup.string().required("* This field is required"),
  email: Yup.string()
    .required("* This field is required")
    .email("Invalid email"),
  passwordSignUp: Yup.string()
    .required("* This field is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "* Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    ),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("passwordSignUp"), null],
    "Passwords must match"
  ),
  acceptTerms: Yup.bool().oneOf([true], "* You have to accept terms first"),
});

const SignupForm = () => {
  const history = useHistory();
  const { isPasswordShownInSignup, isRepeatPasswordShown, showHidePassword } =
    useContext(RootContext);

  return (
    <StyledWrapper>
      <StyledLoginWrapper>
        <Header headerType="h6" letterSpacing="2px" margin="40px 0px 0px 0px">
          Sign up with your email
        </Header>
        <StyledPWrapper>
          <P margin="0px 5px 0px 0px" color="#878787">
            Already have an account?{" "}
          </P>
          <Link linkType="link" to="/login">
            <P color="#44cf9f">Sign in</P>
          </Link>
        </StyledPWrapper>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            passwordSignUp: "",
            repeatPassword: "",
            acceptTerms: false,
          }}
          validationSchema={signupFormValidationSchema}
          onSubmit={(values, { resetForm }) => {
            auth
              .createUserWithEmailAndPassword(
                values.email,
                values.passwordSignUp
              )
              .then((res) => {
                usersCollection
                  .doc(res.user.uid)
                  .set({
                    ...values,
                    id: res.user.uid,
                  })
                  .then(() => toast.success("user created!"))
                  .then(() => history.push(routes.home))
                  .catch((err) => console.log(err));
              })
              .catch((err) => toast.error(err.message));

            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <StyledForm>
              <StyledField
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name"
              />
              <StyledErrorWrapper>
                <ErrorMessage name="firstName" />
              </StyledErrorWrapper>
              <StyledField
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name"
              />
              <StyledErrorWrapper>
                <ErrorMessage name="lastName" />
              </StyledErrorWrapper>

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
                  id="passwordSignUp"
                  type={isPasswordShownInSignup ? "text" : "password"}
                  name="passwordSignUp"
                  placeholder="Password"
                />
                <StyledShowPasswordButton
                  onClick={() => showHidePassword("passwordSignUp")}
                  type="button"
                >
                  <Img
                    alt="show"
                    src={isPasswordShownInSignup ? Hide : Show}
                    width="30px"
                    height="30px"
                  />
                </StyledShowPasswordButton>
              </StyledInputWrapper>
              <StyledErrorWrapper>
                <ErrorMessage name="password" />
              </StyledErrorWrapper>

              <StyledInputWrapper>
                <StyledFieldPassword
                  id="repeatPassword"
                  type={isRepeatPasswordShown ? "text" : "password"}
                  name="repeatPassword"
                  placeholder="Repeat password"
                />
                <StyledShowPasswordButton
                  onClick={() => showHidePassword("repeatPassword")}
                  type="button"
                >
                  <Img
                    alt="show"
                    src={isRepeatPasswordShown ? Hide : Show}
                    width="30px"
                    height="30px"
                  />
                </StyledShowPasswordButton>
              </StyledInputWrapper>
              <StyledErrorWrapper>
                <ErrorMessage name="repeatPassword" />
              </StyledErrorWrapper>

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
              <StyledErrorWrapper>
                <ErrorMessage name="acceptTerms" />
              </StyledErrorWrapper>

              <Button loginBtn type="submit">
                CREATE ACCOUNT
              </Button>
            </StyledForm>
          )}
        </Formik>
      </StyledLoginWrapper>
    </StyledWrapper>
  );
};

export default SignupForm;
