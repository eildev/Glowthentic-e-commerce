import { useEffect } from "react";
import Item from "./Item";
import ItemDetails from "./ItemDetails";

const OrderSummary = ({
  carts,
  total,
  shippingCharge,
  setShipingCharge,
  setLocation,
  Shipping,
  subTotal,
  tax,
  discountPrice,
  couponData,
  isLoading,
  selectedDistrict,
  location,
  selectedUpazila, // Add new prop for upazila
}) => {
  const checkColor = {
    "--chkfg": "#fff",
  };

  //  carts?.weight?.forEach((weight) => {
  //    totalWeight += weight;
  //  });
  let totalWeight = 0;

  carts?.forEach((item) => {
    totalWeight += parseFloat(item.weight * item.quantity); // or parseInt() if weight is always whole numbers
  });
  console.log("setShipping charge", shippingCharge);

  const preventClick =
    selectedDistrict && selectedUpazila
      ? "pointer-events-none opacity-100"
      : "";
  // Auto-select shipping based on district and upazila
  useEffect(() => {
    if (selectedDistrict) {
      // Check if district is Dhaka AND upazila is Dhaka Sadar
      if (
        selectedDistrict.toLowerCase() === "dhaka" &&
        selectedUpazila &&
        selectedUpazila.toLowerCase() === "dhaka sadar"
      ) {
        setLocation(80); // Inside Dhaka
      } else {
        setLocation(120); // Outside Dhaka
      }
    }
  }, [selectedDistrict, selectedUpazila, setLocation]);

  // Calculate shipping charge based on location and quantity
  useEffect(() => {
    if (location) {
      const baseShipping = location; // 80 or 120 based on location
      const extraCharge = (Shipping - 1) * 20; // Extra charge for additional items
      const totalShippingCharge =
        carts.length <= 1 ? baseShipping : baseShipping + extraCharge;

      // Update the shipping charge in parent component
      if (setShipingCharge) {
        setShipingCharge(totalShippingCharge);
      }
    }
  }, [location, Shipping, carts.length, setShipingCharge]);
  return (
    <div className="p-6 text-left rounded-lg">
      <h4 className="text-lg font-medium mb-4">Order Summary</h4>

      <Item carts={carts}></Item>
      <h3 className="text-xs text-secondary mt-4">
        Select Your Shipping Address
      </h3>
      <div className="mt-2 flex justify-between items-center gap-4 xl:flex-nowrap flex-wrap">
        <div className={`flex justify-start items-center ${preventClick}`}>
          <input
            type="radio"
            name="shipping"
            value="inside"
            style={checkColor}
            id="insideDhaka"
            className="mr-1 checkbox checkbox-warning w-4 h-4"
            onChange={() => setLocation(80)}
            checked={location === 80}
          />
          <label
            htmlFor="insideDhaka"
            className="cursor-pointer text-sm text-nowrap"
          >
            Inside Dhaka (80)
          </label>
        </div>

        <div className={`flex justify-start items-center ${preventClick}`}>
          <input
            type="radio"
            id="outsideDhaka"
            style={checkColor}
            name="shipping"
            className="mr-1 checkbox checkbox-warning w-4 h-4"
            value="outside"
            onChange={() => setLocation(120)}
            checked={location === 120}
          />
          <label
            htmlFor="outsideDhaka"
            className="cursor-pointer text-sm text-nowrap"
          >
            Outside Dhaka (120)
          </label>
        </div>
      </div>

      <ItemDetails
        carts={carts}
        total={total}
        isLoading={isLoading}
        shippingCharge={shippingCharge}
        Shipping={Shipping}
        subTotal={subTotal}
        tax={tax}
        discountPrice={discountPrice}
        couponData={couponData}
        location={location}
        totalWeight={totalWeight}
      />
    </div>
  );
};

export default OrderSummary;
