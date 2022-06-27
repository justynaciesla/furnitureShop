import React from "react";
import { StyledImg } from "./StyledImg";

const Img = ({
  children,
  height,
  width,
  src,
  alt,
  productImg,
  productInCart,
  iconImg,
  margin,
}) => {
  return (
    <StyledImg
      productImg={productImg}
      productInCart={productInCart}
      iconImg={iconImg}
      height={height}
      width={width}
      src={src}
      alt={alt}
      margin={margin}
    >
      {children}
    </StyledImg>
  );
};

export default Img;
