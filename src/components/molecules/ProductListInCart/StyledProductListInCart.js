import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 0px;
  justify-content: center;
`;

export const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  width: 80%;
  margin: auto;
  padding: 40px 0px 0px 0px;
`;

export const StyledHr = styled.hr`
  margin: auto;
  width: 80%;
  color: #f6f6f6;
  background-color: #f6f6f6;
  height: 1px;
  border-color: #f6f6f6;
`;
