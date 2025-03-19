import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import InputInfo from "../checkout/InputInfo";
import PaymentOption from "../checkout/PaymentOption";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./CheckoutWizard.css";
import Item from "../checkout/Item";
import ItemDetails from "../checkout/ItemDetails";

const CheckoutWizard = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  cartItems,
  subTotal,
  shipingCharge,
  Shipping,
  trigger,
  watch,
}) => {
  const formWizardRef = React.createRef();

  const handlePrev = () => {
    formWizardRef.current?.prevTab();
  };

  const handleComplete = () => {
    handleSubmit(onSubmit)(); // Trigger form submission
  };

  const validateStep = async (step) => {
    if (step === 0) {
      // Validate InputInfo
      const result = await trigger(["name", "phone", "email", "address"]);
      return result;
    }
    if (step === 1) {
      // Validate PaymentOption
      const result = await trigger("paymentMethod");
      return result;
    }
    return true; // Step 2 (Review) has no validation
  };

  function icon1() {
    return <Icon icon="mingcute:box-3-fill" width="1.7em" height="1.7em" />;
  }
  function icon2() {
    return <Icon icon="mdi:credit-card-check" width="1.7em" height="1.7em" />;
  }
  function icon3() {
    return (
      <Icon
        icon="majesticons:clipboard-check-line"
        width="1.7em"
        height="1.7em"
      />
    );
  }

  return (
    <div>
      <div className="bg-white py-5">
        <button
          className="sample-refrence-button ps-5 font-medium flex items-center"
          onClick={handlePrev}
        >
          <Icon
            icon="line-md:arrow-left"
            width="1.5em"
            height="1.5em"
            className="mr-2"
          />
          Checkout
        </button>
      </div>
      <FormWizard
        ref={formWizardRef}
        onComplete={handleComplete}
        removeBackgroundTab={true}
        removeBackgroundTabColor="white"
        nextButtonText="Next"
        nextButtonTemplate={(handleNext) => (
          <button
            className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
            onClick={async () => {
              const currentStep = formWizardRef.current?.state.activeTabIndex;
              const isValid = await validateStep(currentStep);
              if (isValid) handleNext();
            }}
          >
            Next
            <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
          </button>
        )}
        finishButtonTemplate={(handleComplete) => (
          <button
            className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
            onClick={handleComplete}
          >
            PLACE ORDER
            <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
          </button>
        )}
        backButtonTemplate={(handlePrevious) => (
          <button className="base-button" onClick={handlePrevious}></button>
        )}
      >
        <FormWizard.TabContent title="Shipping" icon={icon1()}>
          <InputInfo
            register={register}
            errors={errors}
            shipToDifferentAddress={watch("shipToDifferentAddress")}
          />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Payment" icon={icon2()}>
          <PaymentOption register={register} errors={errors} />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Review" icon={icon3()}>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title ps-0 text-lg font-medium peer-checked:bg-base-300 text-left">
              Items
            </div>
            <div className="collapse-content peer-checked:block text-left">
              <Item />
            </div>
          </div>
          <hr className="text-gray-thin" />
          <div className="text-left">
            <h3 className="font-semibold py-3">Shipping Address</h3>
            <div className="space-y-2 pb-5">
              <div className="flex justify-between text-sm text-gray font-normal">
                <span>Name:</span>
                <span>{watch("name") || "John Doe"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span>Phone:</span>
                <span>{watch("phone") || "01782588888"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span>Email:</span>
                <span>{watch("email") || "JohnDoe@gmail.com"}</span>
              </div>
              <div className="flex justify-between text-sm text-gray font-normal">
                <span>Address:</span>
                <span className="ps-14">
                  {watch("address") || "Banasree, Dhaka, Bangladesh"}
                </span>
              </div>
            </div>
            <hr className="text-gray-thin" />
          </div>
          <h3 className="text-left font-semibold pt-4">Order Info</h3>
          <ItemDetails
            carts={cartItems}
            subTotal={subTotal}
            shipingCharge={shipingCharge}
            Shipping={Shipping}
          />
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  );
};

export default CheckoutWizard;

// import React from "react";
// import FormWizard from "react-form-wizard-component";
// import "react-form-wizard-component/dist/style.css";
// import InputInfo from "../checkout/InputInfo";
// import PaymentOption from "../checkout/PaymentOption";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import "./CheckoutWizard.css";
// import Item from "../checkout/Item";
// import ItemDetails from "../checkout/ItemDetails";

// const CheckoutWizard = () => {
//   const formWizardRef = React.createRef();
//   const handelPrev = () => {
//     console.log("prevTab");
//     formWizardRef.current?.prevTab();
//   };
//   const handleComplete = () => {
//     console.log("Form completed!");
//   };

//   function icon1() {
//     return <Icon icon="mingcute:box-3-fill" width="1.7em" height="1.7em" />;
//   }
//   function icon2() {
//     return <Icon icon="mdi:credit-card-check" width="1.7em" height="1.7em" />;
//   }
//   function icon3() {
//     return (
//       <Icon
//         icon="majesticons:clipboard-check-line"
//         width="1.7em"
//         height="1.7em"
//       />
//     );
//   }

//   return (
//     <div>
//       <div className="bg-white py-5">
//         <button
//           className="sample-refrence-button ps-5 font-medium flex items-center"
//           onClick={handelPrev}
//         >
//           <Icon
//             icon="line-md:arrow-left"
//             width="1.5em"
//             height="1.5em"
//             className="mr-2"
//           />
//           Checkout
//         </button>
//       </div>
//       <FormWizard
//         ref={formWizardRef}
//         onComplete={handleComplete}
//         removeBackgroundTab={true}
//         removeBackgroundTabColor="white"
//         nextButtonText="Save"
//         finishButtonTemplate={(handleComplete) => (
//           <button
//             className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
//             onClick={handleComplete}
//           >
//             PLACE ORDER
//             <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
//           </button>
//         )}
//         backButtonTemplate={(handlePrevious) => (
//           <button className="base-button" onClick={handlePrevious}></button>
//         )}
//       >
//         <FormWizard.TabContent title="Shipping" icon={icon1()}>
//           <InputInfo register={true}></InputInfo>
//         </FormWizard.TabContent>

//         <FormWizard.TabContent title="Payment" icon={icon2()}>
//           <PaymentOption></PaymentOption>
//         </FormWizard.TabContent>
//         <FormWizard.TabContent title="Review" icon={icon3()}>
//           {/* Item accordian */}
//           <div className="collapse collapse-arrow bg-base-200 ">
//             <input type="checkbox" className="peer " />
//             <div className="collapse-title ps-0 text-lg font-medium  peer-checked:bg-base-300 text-left">
//               Items
//             </div>
//             <div className="collapse-content peer-checked:block text-left">
//               <Item></Item>
//             </div>
//           </div>
//           <hr className="text-gray-thin" />
//           {/* Shipping Address */}
//           <div className="text-left ">
//             <h3 className="font-semibold py-3">Shipping Address</h3>
//             <div className="space-y-2 pb-5">
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span className="font-normal">Name:</span>
//                 <span>John Doe</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span className="font-normal">Phone:</span>
//                 <span>01782588888</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span className="font-normal">Email:</span>
//                 <span>JohnDoe@gmail.com</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span className="font-normal">Address:</span>
//                 <span className="ps-14"> Banasree ,Dhaka, Bangladesh </span>
//               </div>
//             </div>
//             <hr className="text-gray-thin" />
//           </div>
//           {/* //Item Details show */}
//           <h3 className="text-left font-semibold pt-4">Order Info</h3>
//           <ItemDetails></ItemDetails>
//           {/* Item Details End */}
//         </FormWizard.TabContent>
//       </FormWizard>
//     </div>
//   );
// };

// export default CheckoutWizard;
