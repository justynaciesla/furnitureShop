import styled from "styled-components";

export const StyledP = styled.p`
  font-size: ${({ fontSize = "12px" }) => fontSize};
  color: ${({ color = "black" }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
`;
