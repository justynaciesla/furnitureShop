import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  align-items: flex-start;
  box-shadow: 3px 3px 3px #efecec;
  //margin: 80px 0px 0px -340px;
  height: 600px;
  width: 225px;
  transition: margin 1s;
  margin: ${({ visibility }) =>
    (visibility === "close" && "80px 0px 0px -280px;") ||
    (visibility === "open" && "80px 0px 0px -70px;")};
  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;

export const StyledHeaderWrapper = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const StyledFilterByNameWrapper = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const StyledFilterByProductsWrapper = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const StyledFilterByPriceWrapper = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const ButtonWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;
