import styled from "styled-components";
import { Field, Form } from "formik";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d1e9e3;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const StyledLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 50px;
  box-shadow: 5px 3px 3px #d3d3d3;
  background-color: white;
`;

export const StyledPWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px 30px 0px;
  letter-spacing: 1px;
`;

export const StyledField = styled(Field)`
  width: 400px;
  height: 50px;
  margin: 0px 0px 0px 0px;
  border: 1px solid #d9d6d6;

  text-indent: 10px;
`;

export const StyledFieldPassword = styled(Field)`
  width: 350px;
  height: 50px;
  margin: 0px 0px 0px 0px;
  border: 1px solid #d9d6d6;

  text-indent: 10px;
`;

export const StyledForm = styled(Form)`
  padding: 0px 0px 50px 0px;
`;

export const StyledErrorWrapper = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 0px;
  width: 400px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
`;

export const StyledShowPasswordButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #e7f0fe;
  border: 1px solid #d9d6d6;
`;
