import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media ${mainTheme.devices.tablet} {
    display: none;
  }
`;
