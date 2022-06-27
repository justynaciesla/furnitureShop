import React from "react";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import Link from "../../atoms/link";
import {
  StyledWrapper,
  StyledWelcomeTextWrapper,
  StyledImgWrapper,
} from "./StyledWelcome";
import Lamps from "../../../assets/images/lamps.png";

const HomeWelcome = () => {
  return (
    <StyledWrapper>
      <StyledWelcomeTextWrapper>
        <Header headerType="h1">#Not ordinary Furniture</Header>
        <Link linkType="link" color="orange" to="/products">
          EXPLORE NOW
        </Link>
      </StyledWelcomeTextWrapper>
      <StyledImgWrapper>
        <Img src={Lamps} height="450px" margin=" -10px 200px 0px 0px" />
      </StyledImgWrapper>
    </StyledWrapper>
  );
};

export default HomeWelcome;
