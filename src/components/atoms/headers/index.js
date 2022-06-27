import React from "react";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./StyledHeaders";

const Header = ({
  headerType,
  children,
  color,
  fontFamily,
  fontSize,
  textAlign,
  margin,
  fontWeight,
  letterSpacing,
}) => {
  const _renderHeader = () =>
    headerType === "h1" ? (
      <StyledH1
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
      >
        {children}
      </StyledH1>
    ) : headerType === "h2" ? (
      <StyledH2
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
      >
        {children}
      </StyledH2>
    ) : headerType === "h3" ? (
      <StyledH3
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
      >
        {children}
      </StyledH3>
    ) : headerType === "h4" ? (
      <StyledH4
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
      >
        {children}
      </StyledH4>
    ) : headerType === "h5" ? (
      <StyledH5
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
      >
        {children}
      </StyledH5>
    ) : (
      <StyledH6
        color={color}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        margin={margin}
        letterSpacing={letterSpacing}
      >
        {children}
      </StyledH6>
    );

  return <>{_renderHeader()}</>;
};

export default Header;
