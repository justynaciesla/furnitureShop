import React, { useContext } from "react";
import RootContext from "../../../context";
import Button from "../../atoms/button";
import Img from "../../atoms/img";
import Header from "../../atoms/headers";
import Link from "../../atoms/link";
import { StyledDiv } from "./StyledAddToCartButtons";
import Heart from "../../../assets/icons/heart.png";
import Details from "../../../assets/icons/loupe.png";

const AddToCartButtons = ({ item }) => {
  const { id, name } = item;
  const { addToCart } = useContext(RootContext);
  return (
    <StyledDiv>
      <Button addToCartBtn height="50px" width="50px" backgroundColor="white">
        <Img src={Heart} alt="Like-it" width="17px" height="17px" />
      </Button>

      <Button
        addToCartBtn
        height="50px"
        width="130px"
        backgroundColor="white"
        onClickFn={() => addToCart(id)}
      >
        <Header headerType="h6" fontSize="15px">
          ADD TO CART
        </Header>
      </Button>
      <Link
        to={{
          pathname: `/products/${name}`,
          state: { ...item },
        }}
      >
        <Button addToCartBtn height="50px" width="50px" backgroundColor="white">
          <Img src={Details} alt="Like-it" width="17px" height="17px" />
        </Button>
      </Link>
    </StyledDiv>
  );
};

export default AddToCartButtons;
