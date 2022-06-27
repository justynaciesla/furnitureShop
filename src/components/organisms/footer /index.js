import React from "react";
import Logo from "../../atoms/logo";
import P from "../../atoms/p";
import Link from "../../atoms/link";
import Header from "../../atoms/headers";
import Img from "../../atoms/img";
import Facebook from "../../../assets/icons/facebook.png";
import Instagram from "../../../assets/icons/instagram.png";
import Pinterest from "../../../assets/icons/pinterest.png";
import {
  StyledFooterWrapper,
  StyledShopDescriptionWrapper,
  StyledShopContentWrapper,
  StyledContactWrapper,
  StyledFollowUsWrapper,
  StyledIconWrapper,
  StyledDescriptionWrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledShopDescriptionWrapper>
        <Logo>Furniture</Logo>
        <StyledDescriptionWrapper>
          <P fontSize="17px" margin="0px 0px 10px 33px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, sunt assumenda minima beatae numquam in. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Consequatur, sunt
            assumenda minima.
          </P>
        </StyledDescriptionWrapper>
      </StyledShopDescriptionWrapper>
      <StyledShopContentWrapper>
        <Header headerType="h6" margin="0px 0px 10px 0px">
          Shop
        </Header>
        <Link to="/" margin="10px 0px 0px 0px">
          Home
        </Link>
        <Link to="/products" margin="10px 0px 0px 0px">
          Products
        </Link>
        <Link to="/contact" margin="10px 0px 0px 0px">
          Contact
        </Link>
      </StyledShopContentWrapper>
      <StyledContactWrapper>
        <Header headerType="h6" margin="0px 0px 10px 0px">
          Contact
        </Header>
        <Link
          to="mailto:furniture@furniture.com"
          margin="10px 0px 0px 0px"
          color="black"
          fontSize="18px"
          linkType="a"
        >
          furniture@furniture.com
        </Link>
        <Link
          to="tel:5558920234"
          margin="10px 0px 0px 0px"
          color="black"
          fontSize="18px"
          linkType="a"
        >
          +41 123 45 67 89
        </Link>
      </StyledContactWrapper>
      <StyledFollowUsWrapper>
        <Header headerType="h6" margin="0px 0px 10px 0px">
          Follow Us
        </Header>
        <StyledIconWrapper>
          <Img src={Facebook} alt="facebook" iconImg />
          <Img src={Instagram} alt="instagram" iconImg />
          <Img src={Pinterest} alt="pinterest" iconImg />
        </StyledIconWrapper>
      </StyledFollowUsWrapper>
    </StyledFooterWrapper>
  );
};

export default Footer;
