import React, { useContext } from "react";
import RootContext from "../../../context";
import Link from "../../atoms/link";
import Button from "../../atoms/button";
import {
  StyledHamburgerMenuWrapper,
  StyledUl,
  StyledLi,
} from "./StyledHamburgerMenu";

const HamburgerMenu = () => {
  const { isHamburgerMenuOpen, toggleHamburgerMenu } = useContext(RootContext);

  return (
    <>
      <StyledHamburgerMenuWrapper
        visibility={isHamburgerMenuOpen}
        onClick={toggleHamburgerMenu}
      >
        <StyledUl>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/products">Products</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/contact">Contact</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/cart">Shopping Cart</Link>
          </StyledLi>
          <Link linkType="link" to="/login">
            <Button closeBtn>Login</Button>
          </Link>
        </StyledUl>
      </StyledHamburgerMenuWrapper>
    </>
  );
};

export default HamburgerMenu;
