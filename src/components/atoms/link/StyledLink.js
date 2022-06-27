import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledA = styled.a`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  cursor: pointer;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export const StyledLink = styled(Link)`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  cursor: pointer;
  color: ${({ color }) => color};
  font-size: ${({ fontSize = "18px" }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  color: black;
  cursor: pointer;
  font-size: 18px;
  margin: ${({ margin }) => margin};
  &.active a {
    color: #44cf9f;
  }

  //color: ${({ theme, color }) => (color ? color : theme.colors.mainHeading)};
`;
