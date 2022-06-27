import styled from "styled-components";
import { Field, Form } from "formik";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  wrap: nowrap;
  gap: 10;
  margin: 0px 0px 40px 0px;
  justify-content: flex-start;
  width: 40%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding: 0px 0px 50px 0px;
  margin: 0px 0px 0px 20px;
`;

export const StyledLabel = styled.label`
  border: 1px solid grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0px 10px 20px 0px;
`;

export const StyledInput = styled(Field)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:checked + ${StyledLabel} {
    border: 2px solid green;
  }
`;

export const StyledField = styled(Field)`
  width: 400px;
  height: 50px;
  margin: 0px 0px 0px 0px;
  border: 1px solid #d9d6d6;
  border-radius: 3px;
  text-indent: 10px;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledErrorWrapper = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 0px;
  width: 400px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 100px 0px;
`;
