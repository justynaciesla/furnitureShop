import React, { useContext } from "react";
import RootContext from "../../../context";
import {
  StyledUl,
  StyledLi,
  StyledItemsCount,
  StyledShoppingCartIconWrapper,
  HamburgerMenu,
  StyledSearchLi,
} from "./StyledUserPanel";
import Img from "../../atoms/img";
import Link from "../../atoms/link";
import P from "../../atoms/p";
import Button from "../../atoms/button";
import Search from "../../../assets/icons/loupe.png";
import ShoppingCart from "../../../assets/icons/shopping-cart.png";
import Menu from "../../../assets/icons/menu.png";
import Login from "../../../assets/icons/user-interface.png";
import Close from "../../../assets/icons/close.png";
import SearchModal from "../../organisms/searchModal";

const UserPanel = () => {
  const {
    cart,
    toggleModal,
    isModalOpen,
    toggleHamburgerMenu,
    isHamburgerMenuOpen,
  } = useContext(RootContext);
  return (
    <StyledUl>
      <StyledSearchLi>
        {isModalOpen ? <SearchModal /> : null}
        <Button
          border="none"
          backgroundColor="transparent"
          onClickFn={toggleModal}
        >
          <Img iconImg alt="search" src={Search} />
        </Button>
      </StyledSearchLi>
      <StyledShoppingCartIconWrapper>
        <StyledLi>
          <Link linkType="link" to="/cart">
            <Img iconImg alt="shopping-cart" src={ShoppingCart} />

            {cart.length > 0 ? (
              <StyledItemsCount>
                <P fontSize="12px" color="white" fontWeight="600">
                  {cart.length}
                </P>
              </StyledItemsCount>
            ) : null}
          </Link>
        </StyledLi>
      </StyledShoppingCartIconWrapper>
      <StyledLi>
        <Link linkType="link" to="/login">
          <Img iconImg alt="login" src={Login} />
        </Link>
      </StyledLi>
      <HamburgerMenu>
        <Button
          border="none"
          backgroundColor="transparent"
          onClickFn={toggleHamburgerMenu}
        >
          {isHamburgerMenuOpen === "open" ? (
            <Img iconImg src={Close} alt="close" />
          ) : (
            <Img iconImg src={Menu} alt="Menu" />
          )}
        </Button>
      </HamburgerMenu>
    </StyledUl>
  );
};

export default UserPanel;
