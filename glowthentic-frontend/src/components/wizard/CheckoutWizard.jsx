// import React, { SVGProps } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import InputInfo from "../checkout/InputInfo";
import PaymentOption from "../checkout/PaymentOption";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./CheckoutWizard.css";
import Item from "../checkout/Item";
import ItemDetails from "../checkout/ItemDetails";

const CheckoutWizard = () => {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  function icon1() {
    return <Icon icon="mingcute:box-3-fill" width="2em" height="2em" />;
  }
  function icon2() {
    return <Icon icon="mdi:credit-card-check" width="2em" height="2em" />;
  }
  function icon3() {
    return (
      <Icon icon="majesticons:clipboard-check-line" width="2em" height="2em" />
    );
  }

  return (
    <div>
      <FormWizard
        onComplete={handleComplete}
        removeBackgroundTab={true}
        removeBackgroundTabColor="white"
        nextButtonText="Save"
      >
        <FormWizard.TabContent title="Shipping" icon={icon1()}>
          <InputInfo></InputInfo>
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Payment" icon={icon2()}>
          <PaymentOption></PaymentOption>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Review" icon={icon3()}>
          {/* Item accordian */}
          <div className="collapse collapse-arrow bg-base-200 ">
            <input type="checkbox" className="peer " />
            <div className="collapse-title ps-0 text-lg font-medium  peer-checked:bg-base-300 text-left">
              Items
            </div>
            <div className="collapse-content peer-checked:block text-left">
              <Item></Item>
            </div>
          </div>
          <hr className="text-gray-thin" />
          {/* Shipping Address */}
          <div className="text-left ">
            <h3 className="font-semibold py-3">Shipping Address</h3>
            <div className="space-y-2 pb-5">
              <div className="flex justify-between text-sm text-gray font-normal">
                <span className="font-normal">Name:</span>
                <span>John Doe</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span className="font-normal">Phone:</span>
                <span>01782588888</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span className="font-normal">Email:</span>
                <span>JohnDoe@gmail.com</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span className="font-normal">Address:</span>
                <span className="ps-14"> Banasree ,Dhaka, Bangladesh </span>
              </div>
            </div>
            <hr className="text-gray-thin" />
          </div>
          {/* //Item Details show */}
          <h3 className="text-left font-semibold pt-4">Order Info</h3>
          <ItemDetails></ItemDetails>
          {/* Item Details End */}
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  );
};

export default CheckoutWizard;
