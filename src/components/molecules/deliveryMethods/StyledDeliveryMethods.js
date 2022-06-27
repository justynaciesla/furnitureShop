import styled from "styled-components";
import { Field } from "formik";

export const StyledWrapperDelivery = styled.div`
  display: flex;
  flex-direction: column;
  wrap: nowrap;
  gap: 10;
  margin: 0px 0px 10px 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledLabel = styled.label`
  border: 1px solid grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px 10px 0px 0px;
  width: 120px;
`;

export const StyledInput = styled(Field)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:checked + ${StyledLabel} {
    border: 3px solid green;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 100px 0px;
`;

export const StyledErrorMessage = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 0px;
`;
