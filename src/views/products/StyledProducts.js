import styled from "styled-components";
import { mainTheme } from "../../globalStyles/themes/mainTheme";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d1e9e3;
  width: 83%;
  margin: -40px auto;
  justify-content: center;
  @media ${mainTheme.devices.tablet} {
    align-items: center;
    height: 100px;
  }
`;

export const StyledFilterProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  @media ${mainTheme.devices.tablet} {
    width: 100%;
    margin: 0px;
  }
`;
