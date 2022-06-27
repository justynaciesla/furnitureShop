import React from "react";
import {
  StyledFilterByNameWrapper,
  StyledLabel,
  StyledInput,
} from "./StyledFilterByName";

const FilterByName = ({ forHtml, type, id, name, label, onChange }) => {
  return (
    <StyledFilterByNameWrapper>
      <StyledLabel for={forHtml}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        name={name}
        autocomplete="off"
        onChange={onChange}
      />
    </StyledFilterByNameWrapper>
  );
};

export default FilterByName;
