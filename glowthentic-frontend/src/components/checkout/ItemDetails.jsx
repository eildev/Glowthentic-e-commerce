import { Icon } from "@iconify/react/dist/iconify.js";
const ItemDetails = () => {
    return (
    
        <div className="space-y-4">
        <div className="flex justify-between pt-6">
          <span className="text-sm text-gray font-normal">Sub-total</span>
          <span className="text-sm font-medium">$520</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-sm text-gray font-normal">Shipping</span>
          <span className="text-sm font-medium">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray font-normal">Discount</span>
          <span className="text-sm font-medium">$24</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray font-normal">Tax</span>
          <span className="text-sm font-medium">$61.99</span>
        </div>
        <hr className="my-2 text-hr-thin" />
        <div className="flex justify-between font-bold">
          <span className="text-sm text-gray font-bold">Total</span>
          <span className="text-lg font-medium  ">$434.01</span>
        </div>
        <button className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center">
          PLACE ORDER
          {/* <Icon icon="mdi-light:arrow-right" width="1.5em" height="2em" /> */}
          <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
        </button>
      </div>
      
    );
};

export default ItemDetails;