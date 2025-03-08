
const ItemDetails = ({ carts, total }) => {

  const shipingCharge = carts.length <= 1 ? 80 : 80 + (carts.length - 1) * 20;

  const numericTotal = Number(total) || 0; // যদি total NaN হয়, তাহলে 0 ব্যবহার করবে
  const grandTotal = numericTotal + shipingCharge;

  return (
    <div className="space-y-4">
      <div className="flex justify-between pt-6">
        <span className="text-sm text-gray font-normal">Sub-total</span>
        <span className="text-sm font-medium">{numericTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between ">
        <span className="text-sm text-gray font-normal">Shipping</span>
        <span className="text-sm font-medium">{shipingCharge.toFixed(2)}</span>
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
        <span className="text-lg font-medium  ">{grandTotal.toFixed(2)}</span>
      </div>
    </div>

  );
};

export default ItemDetails;