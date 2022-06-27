import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "60px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH2 = styled.h2`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "50px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH3 = styled.h3`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "40px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH4 = styled.h4`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "35px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH5 = styled.h5`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "30px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

export const StyledH6 = styled.h6`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = "black" }) => color};
  font-size: ${({ fontSize = "20px" }) => fontSize};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  margin: ${({ margin }) => margin};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
