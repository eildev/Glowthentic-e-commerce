
const ItemDetails = ({ carts, total }) => {

  
  // const numericTotal = Number(total) || 0; 
  
  const subTotal = carts.reduce((sum, cartItem) => {
    return sum + (cartItem.regular_price * cartItem.quantity);
  }, 0);
  const Shipping = carts.reduce((sum, cartItem) => {
    return sum + cartItem.quantity;
  }, 0);
  const shipingCharge = carts.length <= 1 ? 80 : 80 + (Shipping - 1) * 20;
  const grandTotal = subTotal + shipingCharge;



  return (
    <div className="space-y-4">
      <div className="flex justify-between pt-6">
        <span className="text-sm text-gray font-normal">Sub-total</span>
        <span className="text-sm font-medium">{subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between ">
        <span className="text-sm text-gray font-normal">Shipping</span>
        <span className="text-sm font-medium">{shipingCharge.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray font-normal">Discount</span>
        <span className="text-sm font-medium">$0</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray font-normal">Tax</span>
        <span className="text-sm font-medium">$0</span>
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