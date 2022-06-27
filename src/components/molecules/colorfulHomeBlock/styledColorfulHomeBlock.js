import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 25% 30%;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  justify-content: center;
  width: 78%;
  margin: 100px auto;

  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;

export const StyledFirstItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: rgb(249, 217, 218);
  display: flex;
  flex-direction: row;
`;

export const StyledSecondItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #daf3ed;
  display: flex;
  flex-direction: row;
`;

export const StyledThirdItem = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #ffedcd;
  display: flex;
  flex-direction: row;
`;

export const StyledFourthItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: #d8dbeb;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledFifthItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  background-color: #e2f0de;
  display: flex;
  flex-direction: row;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px 20px;
`;

export const StyledSecondDiv = styled.div`
  margin: 50px 0px 0px -120px;
`;

export const StyledThirdDiv = styled.div`
  margin: 50px 0px 0px 20px;
`;

export const StyledFourthDiv = styled.div`
  margin: 0px 0px 170px -60px;
`;

export const StyledFifthDiv = styled.div`
  margin: 70px 0px 0px -120px;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StyledImgContainer2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0px 0px 0px -15px;
`;
