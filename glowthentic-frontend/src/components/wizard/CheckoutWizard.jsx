import React, { useState } from "react";
import InputInfo from "../checkout/InputInfo";
import PaymentOption from "../checkout/PaymentOption";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./CheckoutWizard.css";
import Item from "../checkout/Item";
import ItemDetails from "../checkout/ItemDetails";
import districtsData from "../../components/checkout/DistrictUpozila.json";

const CheckoutWizard = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  cartItems,
  subTotal,
  shippingCharge,
  Shipping,
  trigger,
  watch,
  data,
  setValue,
  setSelectedDistrict,
  districtId,
  setDistrictId,
  upazilaId,
  setUpazilaId
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const validateStep = async (step) => {
    if (step === 0) {
      return await trigger(["name", "phone", "email", "district", "upazila", "address"]);
    }
    if (step === 1) {
      return await trigger("paymentMethod");
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateStep(activeStep);
    if (isValid && activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };



  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleComplete = () => {
    handleSubmit(onSubmit)();
  };


  const steps = [
    { title: "Shipping", icon: "mingcute:box-3-fill" },
    { title: "Payment", icon: "mdi:credit-card-check" },
    { title: "Review", icon: "majesticons:clipboard-check-line" },
  ];
  const renderStepContent = () => {
    console.log("Current form state:", watch());
    switch (activeStep) {
      case 0:
        return (
          <InputInfo
          register={register}
          errors={errors}
          data={data}
          setValue={setValue}
          setSelectedDistrict={setSelectedDistrict}
          watch={watch}
          districtId={districtId}
          setDistrictId={setDistrictId}
          upazilaId={upazilaId}
          setUpazilaId={setUpazilaId}
        />
        );
      case 1:
        return <PaymentOption register={register} errors={errors} />;
      case 2:
        return (
          <>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" className="peer" />
              <div className="collapse-title ps-0 text-lg font-medium peer-checked:bg-base-300 text-left">
                Items
              </div>
              <div className="collapse-content peer-checked:block text-left">
                <Item carts={cartItems} />
              </div>
            </div>
            <hr className="text-gray-thin" />
            <div className="text-left">
              <h3 className="font-semibold py-3">Shipping Address</h3>
              <div className="space-y-2 pb-5">
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Name:</span>
                  <span>{watch("name") || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Phone:</span>
                  <span>{watch("phone") || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Email:</span>
                  <span>{watch("email") || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>District:</span>
                  <span>{watch("district") || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Upazila:</span>
                  <span>{watch("upazila") || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Address:</span>
                  <span className="ps-14">{watch("address") || "N/A"}</span>
                </div>
              </div>
              <hr className="text-gray-thin" />
            </div>
            <h3 className="text-left font-semibold pt-4">Order Info</h3>
            <ItemDetails
              carts={cartItems}
              subTotal={subTotal}
              shippingCharge={shippingCharge}
              Shipping={Shipping}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white py-5">
        <button
          className="sample-refrence-button ps-5 font-medium flex items-center disabled:opacity-50"
          onClick={handlePrev}
          disabled={activeStep === 0}
        >
          <Icon icon="line-md:arrow-left" width="1.5em" height="1.5em" className="mr-2" />
          Checkout
        </button>
      </div>

      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index <= activeStep ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Icon icon={step.icon} width="1.7em" height="1.7em" />
            <span className="ml-2 text-sm">{step.title}</span>
          </div>
        ))}
      </div>

      <div>{renderStepContent()}</div>

      <div className="flex justify-between mt-6 mb-4">
        {activeStep > 0 && (
          <button
            className="font-medium text-sm bg-gray-300 text-black py-3 px-6 rounded hover:bg-gray-400 mb-4"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}
        {activeStep < 2 ? (
          <button
            className="w-full max-w-xs font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center ml-auto mb-4"
            onClick={handleNext}
          >
            Next
            <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
          </button>
        ) : (
          <button
            className="w-full max-w-xs font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center ml-auto mb-4"
            onClick={handleComplete}
          >
            PLACE ORDER
            <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
          </button>
        )}
      </div>
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

// const CheckoutWizard = ({
//   register,
//   errors,
//   handleSubmit,
//   onSubmit,
//   cartItems,
//   subTotal,
//   shippingCharge, 
//   Shipping,
//   trigger,
//   watch,
//   data,
//   setValue,
//   setSelectedDistrict, // Add this prop
// }) => {
//   const formWizardRef = React.createRef();

//   const handlePrev = () => {
//     formWizardRef.current?.prevTab();
//   };

//   const handleComplete = () => {
//     handleSubmit(onSubmit)(); // Trigger form submission
//   };

//   const validateStep = async (step) => {
//     if (step === 0) {
//       // Validate InputInfo (updated to include district and upazila)
//       const result = await trigger(["name", "phone", "email", "district", "upazila", "address"]);
//       return result;
//     }
//     if (step === 1) {
//       // Validate PaymentOption
//       const result = await trigger("paymentMethod");
//       return result;
//     }
//     return true; // Step 2 (Review) has no validation
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
//           onClick={handlePrev}
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
//         nextButtonText="Next"
//         nextButtonTemplate={(handleNext) => (
//           <button
//             className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center"
//             onClick={async () => {
//               const currentStep = formWizardRef.current?.state.activeTabIndex;
//               const isValid = await validateStep(currentStep);
//               if (isValid) handleNext();
//             }}
//           >
//             Next
//             <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
//           </button>
//         )}
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
//           <InputInfo
//             register={register}
//             errors={errors}
//             shipToDifferentAddress={watch("shipToDifferentAddress")}
//             data={data} // Pass data for pre-filling
//             setValue={setValue} // Pass setValue for form updates
//             setSelectedDistrict={setSelectedDistrict} // Pass setSelectedDistrict
//           />
        
//         </FormWizard.TabContent>

//         <FormWizard.TabContent title="Payment" icon={icon2()}>
//           <PaymentOption register={register} errors={errors} />
//         </FormWizard.TabContent>

//         <FormWizard.TabContent title="Review" icon={icon3()}>
//           <div className="collapse collapse-arrow bg-base-200">
//             <input type="checkbox" className="peer" />
//             <div className="collapse-title ps-0 text-lg font-medium peer-checked:bg-base-300 text-left">
//               Items
//             </div>
//             <div className="collapse-content peer-checked:block text-left">
//               <Item carts={cartItems} /> {/* Pass cartItems */}
//             </div>
//           </div>
//           <hr className="text-gray-thin" />
//           <div className="text-left">
//             <h3 className="font-semibold py-3">Shipping Address</h3>
//             <div className="space-y-2 pb-5">
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>Name:</span>
//                 <span>{watch("name") || "John Doe"}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>Phone:</span>
//                 <span>{watch("phone") || "01782588888"}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>Email:</span>
//                 <span>{watch("email") || "JohnDoe@gmail.com"}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>District:</span>
//                 <span>{watch("district") || "N/A"}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>Upazila:</span>
//                 <span>{watch("upazila") || "N/A"}</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray font-normal">
//                 <span>Address:</span>
//                 <span className="ps-14">
//                   {watch("address") || "Banasree, Dhaka, Bangladesh"}
//                 </span>
//               </div>
//             </div>
//             <hr className="text-gray-thin" />
//           </div>
//           <h3 className="text-left font-semibold pt-4">Order Info</h3>
//           <ItemDetails
//             carts={cartItems}
//             subTotal={subTotal}
//             shippingCharge={shippingCharge} 
//             Shipping={Shipping}
//           />
//         </FormWizard.TabContent>
//       </FormWizard>
//     </div>
//   );
// };

// export default CheckoutWizard;
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
