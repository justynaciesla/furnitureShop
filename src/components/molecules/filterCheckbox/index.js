import React, { useContext } from "react";
import RootContext from "../../../context";
import {
  StyledCheckboxWrapper,
  StyledInput,
  StyledLabel,
} from "./StyledFilterCheckbox";

const FilterCheckbox = ({ type, id, name, value, forHtml, label }) => {
  const { handleCheckboxChange } = useContext(RootContext);
  return (
    <StyledCheckboxWrapper>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          handleCheckboxChange(e);
        }}
      />
      <StyledLabel for={forHtml}>{label}</StyledLabel>
    </StyledCheckboxWrapper>
  );
};

export default FilterCheckbox;
