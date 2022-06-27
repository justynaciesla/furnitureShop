import styled from "styled-components";
import { Field, Form } from "formik";
import { mainTheme } from "../../../../globalStyles/themes/mainTheme";

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px;
`;

export const StyledLabel = styled.label`
  letter-spacing: 0.1em;
  font-size: 15px;
`;

export const StyledField = styled(Field)`
  width: 200px;
  margin: 10px 0px 0px 0px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #878787;
  font-size: 15px;
  padding-bottom: 10px;
  color: #878787;
  background-color: white;
`;

export const StyledMessageFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 33px 33px 83px;
`;

export const StyledMessageField = styled(Field)`
  width: 470px;
  height: 70px;
  margin: 10px 0px 0px 0px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #878787;
  font-size: 15px;
  color: #878787;
  resize: none;
`;

export const StyledForm = styled(Form)`
  padding: 0px 0px 200px 0px;
`;

export const StyledNameSurnameFiledsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 0px 50px;
`;

export const StyledPhoneEmailFieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 0px 50px;
`;

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  background-color: #d1e9e3;
  width: 50%;

  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  padding-bottom: 150px;
  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;

export const StyledCheckboxField = styled.input`
  margin: 0px 10px 0px 83px;
`;

export const StyledCheckboxFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px 0px 0px;
`;

export const StyledErrorWrapper = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 0px;
  width: 400px;
`;

export const StyledErrorWrapperTerms = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 83px;
  width: 400px;
`;
