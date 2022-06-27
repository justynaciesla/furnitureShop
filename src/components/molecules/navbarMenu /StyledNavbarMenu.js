import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0px;

  @media ${mainTheme.devices.tablet} {
    display: none;
  }
`;

export const StyledLi = styled.li`
  font-size: 18px;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    padding: 33px 10px 33px 10px;
  }
`;
