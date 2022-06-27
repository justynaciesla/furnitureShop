import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  ${({ addToCartBtn }) =>
    addToCartBtn &&
    css`
      border: none;
      font-size: 15px;
      margin: 0px 3px 0px 3px;
      border-bottom: 3px solid #44cf9f;
    `}
  ${({ btnInCart }) =>
    btnInCart &&
    css`
      border: none;
      font-size: 15px;
      margin: 0px 3px 0px 3px;
      height: 50px;
      width: 50px;
      background-color: white;
    `}
    ${({ checkoutBtn }) =>
    checkoutBtn &&
    css`
      color: white;
      background-color: #f33c46;
      border: none;
      font-size: 17px;
      font-weight: 700;
      border-radius: 10px;
      width: 100%;
      height: 40px;
      margin: 10px 0px 20px 0px;
    `}
    ${({ emptyCartBtn }) =>
    emptyCartBtn &&
    css`
      color: white;
      background-color: #f33c46;
      border: 1px solid #f33c46;
      font-size: 20px;
      font-weight: 700;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      margin: 20px 0px 20px 0px;
    `};

  ${({ submitBtn }) =>
    submitBtn &&
    css`
      display: flex;
      flex-direction: row;
      background-color: white;
      border: none;
      font-size: 17px;
      letter-spacing: 0.1em;
      margin: 40px 0px 0px 83px;
      cursor: pointer;
    `};

  ${({ loginBtn }) =>
    loginBtn &&
    css`
      background-color: #44cf9f;
      color: white;
      border: none;
      height: 50px;
      width: 400px;
      font-size: 17px;
      letter-spacing: 0.1em;
      cursor: pointer;
    `};

  ${({ closeBtn }) =>
    closeBtn &&
    css`
      background-color: #44cf9f;
      color: white;
      border: none;
      height: 30px;
      width: 150px;
      font-size: 15px;
      letter-spacing: 0.1em;
      cursor: pointer;
      margin: 20px;
      float: right;
      border-radius: 5px;
    `};

  ${({ openFilterBtn }) =>
    openFilterBtn &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 20%);
      width: 35px;
      height: 35px;
      border: none;
      border-radius: 50%;
      position: absolute;
      margin: 100px 0px 40px 0px;
    `};
`;
