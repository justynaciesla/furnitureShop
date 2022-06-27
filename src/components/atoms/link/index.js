import React from "react";
import { StyledA, StyledLink, StyledNavLink } from "./StyledLink";

const Link = ({
  linkType,
  children,
  to,
  color,
  fontFamily,
  fontSize,
  margin,
  textDecoration,
  onClickFn,
}) => {
  const _renderLink = () =>
    linkType === "a" ? (
      <StyledA
        textDecoration={textDecoration}
        href={to}
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        margin={margin}
        onClickFn={onClickFn}
      >
        {children}
      </StyledA>
    ) : linkType === "link" ? (
      <StyledLink
        to={to}
        color={color}
        fontSize={fontSize}
        margin={margin}
        textDecoration={textDecoration}
        onClickFn={onClickFn}
      >
        {children}
      </StyledLink>
    ) : (
      <StyledNavLink
        to={to}
        color={color}
        fontSize={fontSize}
        margin={margin}
        textDecoration={textDecoration}
        onClickFn={onClickFn}
      >
        {children}
      </StyledNavLink>
    );

  return <>{_renderLink()}</>;
};

export default Link;
