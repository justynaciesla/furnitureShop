import React, { useContext } from "react";
import RootContext from "../../../context";
import P from "../../atoms/p";
import Button from "../../atoms/button";
import Img from "../../atoms/img";
import FilterCheckbox from "../../molecules/filterCheckbox";
import FilterByName from "../../molecules/filterByName";
import FilterByPrice from "../../molecules/filterByPrice";
import Right from "../../../assets/icons/keyboard-right-arrow-button-color.png";
import Left from "../../../assets/icons/keyboard-left-arrow-button-color.png";
import {
  StyledFilterWrapper,
  StyledHeaderWrapper,
  StyledFilterByProductsWrapper,
  StyledFilterByPriceWrapper,
  ButtonWrapper,
} from "./StyledProductFilter";

const ProductFilter = () => {
  const {
    productCategories,
    handleSearchInputChange,
    toggleFilter,
    isFilterOpen,
  } = useContext(RootContext);
  return (
    <>
      <StyledFilterWrapper visibility={isFilterOpen}>
        <StyledHeaderWrapper>
          <P fontSize="19px" fontWeight="500" color="black">
            Filter by:
          </P>
        </StyledHeaderWrapper>

        <FilterByName
          for="name"
          type="text"
          id="name"
          name="name"
          label="Product name:"
          onChange={handleSearchInputChange}
        />

        <StyledFilterByProductsWrapper>
          <P fontSize="18px" fontWeight="400" color="black">
            Products:
          </P>
          <FilterCheckbox
            type="radio"
            id="All"
            name="products"
            value={false}
            for="All"
            label="All"
          />

          {productCategories.map((item) => (
            <FilterCheckbox
              type="radio"
              id={item}
              name="products"
              value={false}
              for={item}
              label={item}
            />
          ))}
        </StyledFilterByProductsWrapper>

        <StyledFilterByPriceWrapper>
          <FilterByPrice />
        </StyledFilterByPriceWrapper>
      </StyledFilterWrapper>
      <ButtonWrapper>
        <Button openFilterBtn onClickFn={toggleFilter}>
          {isFilterOpen === "close" ? (
            <Img src={Right} alt="toRight" width="17px" height="17px" />
          ) : (
            <Img src={Left} alt="toLeft" width="17px" height="17px" />
          )}
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default ProductFilter;
