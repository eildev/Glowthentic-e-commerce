// import React, { SVGProps } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import InputInfo from "../checkout/InputInfo";
import PaymentOption from "../checkout/PaymentOption";
import OrderSummary from "../checkout/OrderSummary";
import { Icon } from "@iconify/react/dist/iconify.js";
import './CheckoutWizard.css'
const CheckoutWizard = () => {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  function icon1() {
    return (
        <Icon icon="mingcute:box-3-fill" width="2em" height="2em"  />
    );
  }
  function icon2() {
    return (
        <Icon icon="mdi:credit-card-check" width="2em" height="2em"  />
    );
}
  function icon3() {
    return (
        <Icon icon="majesticons:clipboard-check-line" width="2em" height="2em"  />
    );
  }
  
  return (
    <div>
      <FormWizard onComplete={handleComplete}>
        <FormWizard.TabContent
          title="Shipping"
          icon={icon1()}
        >
          <InputInfo></InputInfo>
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Payment"  icon={icon2()}>
          <PaymentOption></PaymentOption>
        </FormWizard.TabContent>
        
        <FormWizard.TabContent title="Review" icon={icon3()}>
          <OrderSummary></OrderSummary>
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  );
};

export default CheckoutWizard;
