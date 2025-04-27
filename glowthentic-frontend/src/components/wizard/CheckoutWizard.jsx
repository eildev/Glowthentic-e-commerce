import React, { useState, useEffect } from "react";
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
  carts,
  subTotal,
  total,
  shippingCharge,
  Shipping,
  trigger,
  watch,
  data,
  setValue,
  setSelectedDistrict,
  setSelectedUpazila,
  districtId,
  setDistrictId,
  upazilaId,
  setUpazilaId,
  setShippingCharge, // Add shipping charge setter
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [location, setLocation] = useState(0); // Add location state to match OrderSummary
  let totalWeight = 0;

  carts?.forEach((item) => {
    totalWeight += parseFloat(item.weight * item.quantity); // or parseInt() if weight is always whole numbers
  });
  // Automatically determine location based on district and upazila
  useEffect(() => {
    if (districtId) {
      // Check if district is Dhaka AND upazila is Dhaka Sadar
      const district = districtsData.districts.find((d) => d.id === districtId);
      const upazila = district?.upazilas.find((u) => u.id === upazilaId);

      if (
        district?.name?.toLowerCase() === "dhaka" &&
        upazila?.name?.toLowerCase() === "dhaka sadar"
      ) {
        setLocation(80); // Inside Dhaka
      } else {
        setLocation(120); // Outside Dhaka
      }
    }
  }, [districtId, upazilaId]);
  // Shipping calculation effect
  // useEffect(() => {
  //   // Calculate shipping charge based on location and quantity
  //   if (location) {
  //     const baseShipping = location; // 80 or 120 based on location
  //     const extraCharge = (Shipping - 1) * 20; // Extra charge for additional items
  //     const totalShippingCharge = carts.length <= 1 ? baseShipping : baseShipping + extraCharge;

  //     if (setShippingCharge) {
  //       setShippingCharge(totalShippingCharge);
  //     }
  //   }
  // }, [location, Shipping, carts.length, setShippingCharge]);

  const validateStep = async (step) => {
    if (step === 0) {
      return await trigger([
        "name",
        "phone",
        "email",
        "district",
        "upazila",
        "address",
      ]);
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

  // Calculate tax and discount for ItemDetails in review step
  // const tax = Math.round(subTotal * (2 / 100));
  const tax = 0;

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <InputInfo
            register={register}
            errors={errors}
            data={data}
            setValue={setValue}
            setSelectedDistrict={setSelectedDistrict}
            setSelectedUpazila={setSelectedUpazila}
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
                <Item carts={carts} />
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
                  <span>
                    {districtsData.districts.find((d) => d.id === districtId)
                      ?.name || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Upazila:</span>
                  <span>
                    {districtsData.districts
                      .find((d) => d.id === districtId)
                      ?.upazilas.find((u) => u.id === upazilaId)?.name || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray font-normal">
                  <span>Address:</span>
                  <span className="ps-14">{watch("address") || "N/A"}</span>
                </div>
              </div>
              <hr className="text-gray-thin" />
            </div>

            {/* Shipping option display */}
            <div className="mt-4 mb-2 text-left">
              <h3 className="font-semibold mb-2">Shipping Option</h3>
              <div className="text-sm text-gray font-normal">
                {location === 80
                  ? "Inside Dhaka (৳80)"
                  : "Outside Dhaka (৳120)"}
                {carts.length > 1 && ` + Extra Items (${Shipping - 1} × ৳20)`}
              </div>
            </div>

            <h3 className="text-left font-semibold pt-4">Order Info</h3>
            <ItemDetails
              subTotal={subTotal}
              shipingCharge={shippingCharge}
              Shipping={Shipping}
              location={location}
              tax={tax}
              total={total}
              totalWeight={totalWeight}
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
          <Icon
            icon="line-md:arrow-left"
            width="1.5em"
            height="1.5em"
            className="mr-2"
          />
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
