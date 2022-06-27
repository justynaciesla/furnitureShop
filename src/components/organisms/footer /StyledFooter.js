import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledFooterWrapper = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  height: 200px;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: flex-start;
  justify-content: space-evenly;

  @media ${mainTheme.devices.tabletXl} {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const StyledShopDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  text-align: justify;

  @media ${mainTheme.devices.tabletXl} {
    width: auto;
  }
`;

export const StyledDescriptionWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  @media ${mainTheme.devices.tabletXl} {
    display: none;
  }
`;

export const StyledShopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    align-items: center;
  }
`;

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    align-items: center;
  }
`;

export const StyledFollowUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 33px;

  @media ${mainTheme.devices.tabletXl} {
    align-items: center;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
