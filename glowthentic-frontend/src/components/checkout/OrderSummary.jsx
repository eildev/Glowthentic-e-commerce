
import Item from "./Item";
import ItemDetails from "./ItemDetails";

const OrderSummary = ({ carts, total, shipingCharge, location, setLocation, Shipping, subTotal, tax, discountPrice, couponData, isLoading }) => {

  const checkColor = {
    "--chkfg": "#fff", // CSS variable dynamically set
  }; 



  return (
    <div className=" p-6  text-left rounded-lg">
      <h4 className="text-lg font-medium  mb-4">Order Summary</h4>

      <Item carts={carts}></Item>

      <div className="mt-4 flex justify-between items-center gap-4">
        <div className="flex justify-start items-center">
          <input
            type="radio"
            name="shipping"
            value="inside"
            style={checkColor}
             id="insideDhaka"
            className="mr-1 checkbox  checkbox-warning w-4 h-4"
            checked={location === "inside"}
            onChange={() => setLocation("inside")}
          />
          <label htmlFor="insideDhaka" className="">

            Inside Dhaka
          </label>
        </div>

        <div className="flex justify-start items-center">
        <input
            type="radio"
             id="outsideDhaka"
             style={checkColor}
            name="shipping"
            className="mr-1 checkbox  checkbox-warning w-4 h-4"
            value="outside"
            checked={location === "outside"}
            onChange={() => setLocation("outside")}
          />
        <label htmlFor="outsideDhaka">
          Outside Dhaka
        </label>
        </div>
      </div>

     {!location && <h3 className="text-red-300 text-xs mt-3">Select Your Shipping Address</h3>}


      <ItemDetails carts={carts} total={total} isLoading={isLoading} shipingCharge={shipingCharge} Shipping={Shipping} subTotal={subTotal} tax={tax} discountPrice={discountPrice} couponData={couponData}></ItemDetails>
    </div>
  );
};

export default OrderSummary;
