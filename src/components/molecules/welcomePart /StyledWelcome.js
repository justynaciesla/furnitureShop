import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d1e9e3;
  width: 83%;
  height: 500px;
  margin: -40px auto;
  justify-content: space-evenly;
  @media ${mainTheme.devices.tablet} {
    height: 300px;
  }
`;

export const StyledWelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 100px;
`;

export const StyledImgWrapper = styled.div`
  margin: 5px;
  padding: 5px;
  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;
