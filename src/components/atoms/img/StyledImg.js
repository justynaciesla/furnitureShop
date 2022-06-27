import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  src: ${({ src }) => src};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  ${({ productImg }) =>
    productImg &&
    css`
      width: auto;
      height: auto;
      //max-height: 130px;
      max-width: 200px;
    `}

  ${({ productInCart }) =>
    productInCart &&
    css`
      width: auto;
      height: auto;
      max-height: 80px;
      max-width: 130px;
      margin: 15px;
    `}

    ${({ iconImg }) =>
    iconImg &&
    css`
      height: 25px;
      width: 25px;
      border: none;
    `}
`;
