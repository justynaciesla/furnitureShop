import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0px;
`;

export const StyledLi = styled.li`
  display: block;
  text-decoration: none;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    padding: 33px 10px 33px 10px;
  }
  @media ${mainTheme.devices.tablet} {
    display: none;
  }
`;

export const StyledSearchLi = styled.li`
  display: block;
  text-decoration: none;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    padding: 33px 10px 33px 10px;
  }
`;

export const StyledShoppingCartIconWrapper = styled.div`
  position: relative;
`;

export const StyledItemsCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  border: 2px solid #44cf9f;
  background-color: #44cf9f;
  border-radius: 50%;
  position: absolute;
  margin: -18px 0px 0px 13px;
`;

export const HamburgerMenu = styled.li`
  display: none;
  @media ${mainTheme.devices.tablet} {
    display: block;
    text-decoration: none;
    padding: 33px 10px 33px 10px;
  }

  @media ${mainTheme.devices.mobile} {
    display: block;
    text-decoration: none;
  }
`;
