import React, { useContext } from "react";
import RootContext from "../../../context";
import FilterByName from "../../molecules/filterByName";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import Button from "../../atoms/button";
import {
  StyledWrapper,
  StyledProductWrapper,
  StyledSection,
} from "./StyledSearchModal";
import ShoppingCart from "../../../assets/icons/shopping-cart.png";

const SearchModal = () => {
  const {
    handleSearchInputChangeOnModal,
    searchedProducts,
    addToCart,
    toggleModal,
  } = useContext(RootContext);
  return (
    <div>
      <StyledSection>
        <FilterByName
          for="searchByName"
          type="text"
          id="searchByName"
          name="searchByName"
          label="Search product by name:"
          onChange={handleSearchInputChangeOnModal}
        />
        {searchedProducts.map((item) => (
          <StyledWrapper>
            <StyledProductWrapper>
              <Img productInCart src={item.image} />
              <Header headerType="h6" fontSize="18px" margin="15px">
                {item.name}
              </Header>
            </StyledProductWrapper>
            <Button
              border="none"
              backgroundColor="transparent"
              onClickFn={() => addToCart(item.id)}
            >
              <Img iconImg alt="shopping-cart" src={ShoppingCart} />
            </Button>
          </StyledWrapper>
        ))}
        <Button closeBtn onClickFn={toggleModal}>
          Close
        </Button>
      </StyledSection>
    </div>
  );
};

export default SearchModal;
