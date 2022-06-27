import React from "react";
import styled, { css } from "styled-components";
// import {Link} from 'react-router-dom'
import Button from "../components/atoms/button/index";

const H1 = styled.h1`
  /* color: ${(props) => (props.isYellow ? "yellow" : "blue")}; */
  /* color: ${({ isYellow, isRed, isGreen }) =>
    isYellow ? "yellow" : isGreen ? "green" : isRed ? "red" : "blue"}; */

  color: ${({ color = "blue" }) => color};
  font-size: 50px;
  padding: 50px;

  ${({ diff }) =>
    diff &&
    css`
      color: pink;
      font-size: 100px;
      padding: 100px;
      text-decoration: underline;
    `}
`;

// const H1Second = styled(H1)`
//   color: red;
// `;
// const StyledLink = styled(Link)`

// `

const Test = () => {
  return (
    <div>
      {/* <H1>Test</H1>
      <H1 isYellow>Test 2</H1>
      <H1 isRed>Test 3</H1>
      <H1 isGreen>Test 4</H1> */}
      <H1>Test</H1>
      <H1 color="yellow">Test 2</H1>
      <H1 color="red">Test 3</H1>
      <H1 color="green">Test 4</H1>
      <H1 diff>Test diff</H1>
      <Button onClickFn={() => alert("CLick")}>click me</Button>
    </div>
  );
};

export default Test;
