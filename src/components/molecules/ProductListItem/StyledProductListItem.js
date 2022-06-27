import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 250px;
  background-color: #f6f6f6;
  padding: 20px 20px 0px 20px;
  justify-content: space-around;
  box-shadow: 5px 3px 3px #efecec;
  @media ${mainTheme.devices.tablet} {
    height: 200px;
    width: 150px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
