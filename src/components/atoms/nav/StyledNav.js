import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  background-color: #f6f6f6;
  justify-content: space-around;
  padding-bottom: 40px;
  width: 100vw;

  @media ${mainTheme.devices.tablet} {
    justify-content: space-between;
  }
`;
