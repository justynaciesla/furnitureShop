import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledHamburgerMenuWrapper = styled.div`
  display: none;

  @media ${mainTheme.devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #d1e9e3;
    width: 100vw;
    transition: margin 0.5s;
    position: absolute;
    height: 300%;
    margin: ${({ visibility }) =>
      (visibility === "close" && "80px 0px 0px -1000px") ||
      (visibility === "open" && "80px 0px 0px 0px")};
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  height: 100%;
`;

export const StyledLi = styled.li`
  font-size: 18px;
  padding: 20px;
`;
