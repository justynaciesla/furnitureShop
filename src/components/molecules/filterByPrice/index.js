import React, { useContext, useState } from "react";
import RootContext from "../../../context";
import Slider from "@mui/material/Slider";
import "rc-slider/assets/index.css";
import P from "../../atoms/p";
import { StyledWrapper } from "./StyledFilterByPrice";

const FilterByPrice = () => {
  const { minimumPrice, maximumPrice, setCurrentPricesSelected } =
    useContext(RootContext);

  const [value, setValue] = useState([200, 1200]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    setCurrentPricesSelected(newValue);
  };

  return (
    <>
      <P
        fontSize="18px"
        fontWeight="400"
        color="black"
        margin="0px 0px 20px 0px"
      >
        Price:
      </P>
      <StyledWrapper>
        <Slider
          getAriaLabel={() => "Price"}
          min={minimumPrice}
          max={maximumPrice}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          sx={{
            color: "#44cf9f",
          }}
        />
      </StyledWrapper>
    </>
  );
};

export default FilterByPrice;
