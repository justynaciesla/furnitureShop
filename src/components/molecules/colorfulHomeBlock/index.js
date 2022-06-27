import React from "react";
import Img from "../../atoms/img";
import StyledP from "../../atoms/p";
import SuitableWoodTool from "../../../assets/images/suitableWoodenTool.png";
import WoodChair from "../../../assets/images/woodChair.png";
import WhiteShapeChair from "../../../assets/images/whiteShapeChair.png";
import WoodBox from "../../../assets/images/woodBox.png";
import WoodRubberChair from "../../../assets/images/woodRubberChair.png";
import {
  StyledGridContainer,
  StyledFirstItem,
  StyledSecondItem,
  StyledThirdItem,
  StyledFourthItem,
  StyledFifthItem,
  StyledDiv,
  StyledSecondDiv,
  StyledThirdDiv,
  StyledFourthDiv,
  StyledFifthDiv,
  StyledImgContainer,
  StyledImgContainer2,
} from "./styledColorfulHomeBlock";

const ColorfulHomeBlock = () => {
  return (
    <StyledGridContainer>
      <StyledFirstItem>
        <Img src={SuitableWoodTool} height="300px" width="300px" />
        <StyledDiv>
          <StyledP color="#fb8180" margin="0px 0px 20px 0px">
            #NEW ARRIVALS
          </StyledP>
          <StyledP color="#333230" fontSize="20px" fontWeight="500">
            Suitable Wood Tool
          </StyledP>
        </StyledDiv>
      </StyledFirstItem>
      <StyledSecondItem>
        <StyledImgContainer>
          <Img src={WoodChair} height="200px" width="250px" />
        </StyledImgContainer>
        <StyledSecondDiv>
          <StyledP color="#53C5A3" margin="0px 0px 20px 0px">
            #FEATURED
          </StyledP>
          <StyledP color="#333230" fontSize="20px" fontWeight="500">
            Wood Chair
          </StyledP>
        </StyledSecondDiv>
      </StyledSecondItem>
      <StyledThirdItem>
        <StyledThirdDiv>
          <StyledP color="#FFCC80" margin="0px 0px 20px 0px">
            #TRENDING NOW
          </StyledP>
          <StyledP color="#333230" fontSize="20px" fontWeight="500">
            White Shape Chair
          </StyledP>
        </StyledThirdDiv>
        <StyledImgContainer2>
          <Img src={WhiteShapeChair} height="450px" width="300px" />
        </StyledImgContainer2>
      </StyledThirdItem>
      <StyledFourthItem>
        <Img src={WoodRubberChair} height="200px" width="300px" />
        <StyledFourthDiv>
          <StyledP color="#5765AB" margin="0px 0px 20px 0px">
            #HOT COLLECTION
          </StyledP>
          <StyledP color="#333230" fontSize="20px" fontWeight="500">
            Wood Rubber Chair
          </StyledP>
        </StyledFourthDiv>
      </StyledFourthItem>
      <StyledFifthItem>
        <StyledImgContainer>
          <Img src={WoodBox} height="150px" width="250px" />
        </StyledImgContainer>
        <StyledFifthDiv>
          <StyledP color="#90C684" margin="0px 0px 20px 0px">
            #MOST POPULAR
          </StyledP>
          <StyledP color="#333230" fontSize="20px" fontWeight="500">
            Wood Box
          </StyledP>
        </StyledFifthDiv>
      </StyledFifthItem>
    </StyledGridContainer>
  );
};

export default ColorfulHomeBlock;
