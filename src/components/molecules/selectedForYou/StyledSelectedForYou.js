import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const StyledSelectedProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 83%;
  gap: 60px;
  margin: auto;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 250px;
  background-color: #f6f6f6;
  padding: 20px 20px 0px 20px;
  justify-content: space-around;
  box-shadow: 5px 3px 3px #efecec;
  @media ${mainTheme.devices.tablet} {
    height: 200px;
    width: 150px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0px 50px 0px;
`;

export const StyledHr = styled.hr`
  margin: auto;
  width: 30%;
  color: #f6f6f6;
  background-color: #f6f6f6;
  height: 1px;
  border-color: #f6f6f6;
`;

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
