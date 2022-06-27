import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 20px 40px 0px 0px;

  @media ${mainTheme.devices.tabletXl} {
    width: 90%;
    margin: 50px auto 50px auto;
  }
`;

export const StyledRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const StyledHr = styled.hr`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 99%;
  color: #f6f6f6;
  background-color: #f6f6f6;
  height: 1px;
  border-color: #f6f6f6;
`;
