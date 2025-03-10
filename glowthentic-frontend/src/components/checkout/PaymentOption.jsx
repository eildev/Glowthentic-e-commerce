import { Icon } from "@iconify/react/dist/iconify.js";

const PaymentOption = ({ register, errors }) => {
  return (
    <div>
      {/* Payment Option Section */}
      <div className="mt-8">
        <h4 className="text-lg text-left font-bold mb-4">Payment Option</h4>
        <div className="grid grid-cols-3 gap-4">
          {/* Cash on Delivery */}
          <div className="flex flex-col items-center bg-white rounded shadow-md p-2">
            <Icon icon="prime:dollar" className="text-orange-500" width="2em" height="2em" />
            <label htmlFor="cash" className="text-center text-xs mt-2">Cash on Delivery</label>
            <input type="radio" id="cash" {...register("paymentMethod", { required: "Please select a payment method" })} value="COD" className="mt-2" />
          </div>

          {/* Mobile Banking */}
          <div className="flex flex-col items-center bg-white rounded shadow-md p-2">
            <Icon icon="si:money-line" className="text-secondary" width="2em" height="2em" />
            <label htmlFor="mobile-banking" className="text-center text-xs mt-2">Mobile Banking</label>
            <input type="radio" id="mobile-banking" {...register("paymentMethod", { required: "Please select a payment method" })} value="mobile_bank" className="mt-2" />
          </div>

          {/* Debit/Credit Card */}
          <div className="flex flex-col items-center bg-white rounded shadow-md p-2">
            <Icon icon="quill:creditcard" className="text-orange-500" width="2em" height="2em" />
            <label htmlFor="card" className="text-center mt-2 text-xs">Debit/Credit Card</label>
            <input type="radio" id="card" {...register("paymentMethod", { required: "Please select a payment method" })} value="bank" className="mt-2" />
          </div>
        </div>

        {/* Show Error Message if No Radio Button is Selected */}
        {errors.paymentMethod && (
          <p className="text-red-500 text-sm mt-2">{errors.paymentMethod.message}</p>
        )}

        {/* Additional Information */}
        <div className="mt-8">
          <h4 className="text-lg text-left font-bold mb-4">Additional Information</h4>
          <textarea placeholder="Order Notes (Optional)" {...register("orderNotes")} className="border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border-gray-thin rounded p-2 w-full h-24"></textarea>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
