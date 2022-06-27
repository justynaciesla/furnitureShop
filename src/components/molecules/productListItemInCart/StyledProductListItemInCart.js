import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${mainTheme.devices.tabletXl} {
    flex-direction: column;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  width: 180px;
  height: 110px;
  margin: 0px 20px 0px 0px;
`;

export const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
