import React, { useContext } from "react";
import RootContext from "../../../context";
import Header from "../../atoms/headers";
import DeliveryRadiobutton from "../deliveryRadiobutton";
import { StyledShippingModeWrapper } from "./StyledDeliverySelect";

const DeliverySelect = () => {
  const { checkSelectedDelivery } = useContext(RootContext);
  return (
    <StyledShippingModeWrapper>
      <Header headerType="h5" margin="20px 20px 0px 40px" fontWeight="500">
        Choose shipping mode:
      </Header>
      <div onChange={(e) => checkSelectedDelivery(e)}>
        <DeliveryRadiobutton
          type="radio"
          id="store"
          name="delivery"
          value="0"
          htmlFor="delivery"
          label="Store pickup - 0 $"
        />
        <DeliveryRadiobutton
          type="radio"
          id="sending"
          name="delivery"
          value="100"
          htmlFor="delivery"
          label="Delivery at home (Under 4-6 days) - 100 $"
        />
      </div>
    </StyledShippingModeWrapper>
  );
};

export default DeliverySelect;
