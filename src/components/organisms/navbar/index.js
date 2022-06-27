import React from "react";
import Logo from "../../atoms/logo";
import Nav from "../../atoms/nav";
import NavbarMenu from "../../molecules/navbarMenu ";
import UserPanel from "../../molecules/userPanel";

//StyledLi should be imported from atoms - or it should be created in StyledNavbar?

const Navbar = () => {
  return (
    <Nav>
      <Logo>Furniture</Logo>
      <NavbarMenu />
      <UserPanel />
    </Nav>
  );
};

export default Navbar;
