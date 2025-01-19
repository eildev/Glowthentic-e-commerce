import { Icon } from "@iconify/react/dist/iconify.js";
const PaymentOption = () => {
  return (
    <div className="grid">
      <div className="mt-8">
        <h4 className="text-lg font-bold mb-4">Payment Option</h4>
        <div className=" grid-cols-10 ">
          <div className=" flex   col-span-4">
            <div className="flex flex-col  bg-white  justify-center gap-2  py-6 px-5">
              <Icon
                icon="mdi:currency-bdt"
                className="ms-14 text-secondary"
                width="2em"
                height="2em"
              />
              <div>
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" >Cash on Delivery</label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white py-6 px-5">
              <Icon
                icon="si:money-line"
                className="ms-14 text-secondary"
                width="2em"
                height="2em"
              />
              <div>
                <input
                  type="radio"
                  id="mobile-banking"
                  name="payment"
                  className="mr-2"
                />
                <label htmlFor="mobile-banking">Mobile Banking</label>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white py-6 px-5">
              <Icon
                icon="quill:creditcard"
                className="ms-14 text-secondary"
                width="2em"
                height="2em"
              />
              <div>
                <input type="radio" id="card" name="payment" className="mr-2" />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
            </div>
          </div>
        </div>

        {/* Card Information */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <input type="text" placeholder="Name on Card" className="border border-gray-300 rounded p-2 w-full" /> */}
          {/* <input type="text" placeholder="Card Number" className="border border-gray-300 rounded p-2 w-full" />
          <input type="text" placeholder="Expire Date" className="border border-gray-300 rounded p-2 w-full" />
          <input type="text" placeholder="CVC" className="border border-gray-300 rounded p-2 w-full" /> */}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8">
        <h4 className="text-lg font-bold mb-4">Additional Information</h4>
        <textarea
          placeholder="Order Notes (Optional)"
          className="border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  border-gray-thin rounded p-2 w-full h-24"
        ></textarea>
      </div>
    </div>
  );
};

export default PaymentOption;
