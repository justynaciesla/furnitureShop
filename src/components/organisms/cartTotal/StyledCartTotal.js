import styled from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  border-radius: 20px;
  width: 80%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: space-between;
  box-shadow: 5px 3px 3px #efecec;

  @media ${mainTheme.devices.tabletXl} {
    flex-direction: column;
  }
`;
