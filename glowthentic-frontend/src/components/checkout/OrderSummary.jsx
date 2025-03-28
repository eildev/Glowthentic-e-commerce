
import Item from "./Item";
import ItemDetails from "./ItemDetails";

const OrderSummary = ({ carts, total, shipingCharge, setLocation, Shipping, subTotal, tax, discountPrice, couponData, isLoading }) => {

  const checkColor = {
    "--chkfg": "#fff", // CSS variable dynamically set
  }; 



  return (
    <div className=" p-6  text-left rounded-lg">
      <h4 className="text-lg font-medium  mb-4">Order Summary</h4>

      <Item carts={carts}></Item>
      <h3 className="text-xs text-secondary mt-4">Select Your Shipping Address</h3>
      <div className="mt-2 flex justify-between items-center gap-4 xl:flex-nowrap flex-wrap">
        <div className="flex justify-start items-center">
          <input
            type="radio"
            name="shipping"
            value="inside"
            style={checkColor}
             id="insideDhaka"
            className="mr-1 checkbox checkbox-warning w-4 h-4"
            onChange={() => setLocation(80)}
          
          />
          <label htmlFor="insideDhaka" className="cursor-pointer text-sm text-nowrap">

            Inside Dhaka (80)
          </label>
        </div>

        <div className="flex justify-start items-center">
        <input
            type="radio"
             id="outsideDhaka"
             style={checkColor}
            name="shipping"
            className="mr-1 checkbox checkbox-warning w-4 h-4"
            value="outside"
    
            onChange={() => setLocation(120)}
          />
        <label htmlFor="outsideDhaka" className="cursor-pointer text-sm text-nowrap">
          Outside Dhaka (120)
        </label>
        </div>
      </div>

     {/* {!location && <h3 className="text-red-400 text-xs mt-3">Select Your Shipping Address</h3>} */}


      <ItemDetails carts={carts} total={total} isLoading={isLoading} shipingCharge={shipingCharge} Shipping={Shipping} subTotal={subTotal} tax={tax} discountPrice={discountPrice} couponData={couponData}></ItemDetails>
    </div>
  );
};

export default OrderSummary;
