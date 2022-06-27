import React from "react";
import Link from "../../atoms/link/index";
import { StyledUl } from "./StyledNavbarMenu";
import { StyledLi } from "./StyledNavbarMenu";

const NavbarMenu = () => {
  return (
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
    </StyledUl>
  );
};

export default NavbarMenu;
