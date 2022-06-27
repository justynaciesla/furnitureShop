import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 12px;
`;

export const StyledSingleProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  margin: 0px 0px 40px 0px;
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 70px 0px 70px;
  width: 120%;
  height: 160%;
  background-color: #f6f6f6;
`;

export const StyledSingleProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: white;
`;

export const StyledTitleWrapper = styled.div`
  margin: 50px 0px 40px 30px;
`;

export const StyledPriceWrapper = styled.div`
  margin: 0px 0px 40px 30px;
`;

export const StyledButtonWrapper = styled.div`
  margin: 0px 0px 40px 30px;
  width: 70%;
  display: center;
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  row-gap: 10px;
  margin: 0px 20px 40px 30px;
  text-align: justify;
`;
