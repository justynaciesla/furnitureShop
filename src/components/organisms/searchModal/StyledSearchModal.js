import styled from "styled-components";
import { keyframes } from "styled-components";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";

const bounceInTop = keyframes`
    0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
    }
    38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
    }
    55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
    }
    72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    }
    81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
    }
    90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    }
    95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
    }
    100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    }`;

export const StyledSection = styled.section`
  position: fixed;
  top: 25vh;
  left: 28vw;
  height: auto;
  width: 600px;
  background-color: #efecec;
  border-radius: 5px;
  overflow-y: auto;
  box-shadow: 5px 3px 3px #726c6c;
  animation-name: ${bounceInTop};
  animation-duration: 1.1s;

  @media ${mainTheme.devices.tabletXl} {
    width: 400px;
  }

  @media ${mainTheme.devices.tablet} {
    width: 300px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 33px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media ${mainTheme.devices.tabletXl} {
    flex-direction: column;
  }
`;
