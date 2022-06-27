import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({
  children,
  onClickFn,
  color,
  backgroundColor,
  width,
  height,
  borderRadius,
  cursor,
  addToCartBtn,
  btnInCart,
  checkoutBtn,
  emptyCartBtn,
  openFilterBtn,
  submitBtn,
  loginBtn,
  closeBtn,
  margin,
  border,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      margin={margin}
      cursor={cursor}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      onClick={onClickFn}
      addToCartBtn={addToCartBtn}
      btnInCart={btnInCart}
      checkoutBtn={checkoutBtn}
      emptyCartBtn={emptyCartBtn}
      submitBtn={submitBtn}
      loginBtn={loginBtn}
      closeBtn={closeBtn}
      openFilterBtn={openFilterBtn}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
