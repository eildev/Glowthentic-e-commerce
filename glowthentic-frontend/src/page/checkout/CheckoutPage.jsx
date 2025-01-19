import Container from "../../components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
const CheckoutPage = () => {
  const orderItems = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
    

 
  ];
  return (
    <div>
      <Container> 
      <div className="container mx-auto px-4 py-8">
      {/* Billing Information Section */}
      <div>
        <h4 className="text-lg font-normal mb-4">Billing Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
          {/* Left Column: Billing Form */}
          <div className="sm:col-span-7  p-6 shadow rounded-lg">
            <form className="space-y-4">
              {/* Full Name and Phone  */}
                <input type="text" placeholder=" Full Name" className=" focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full" />
  
              {/* Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="number" placeholder="Phone Number" className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full" />
                <input type="email" placeholder="Email" className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full" />
                </div>
              {/* Address */}
              <textarea
                placeholder="Address"
                  className="focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full h-24"
                ></textarea>

              {/* Checkbox */}
              <div className="flex items-center">
                <input type="checkbox" id="same-address" className="mr-2" />
                <label htmlFor="same-address" className="text-sm">Ship to a different address</label>
              </div>

              <div className="mt-8">
        <h4 className="text-lg font-bold mb-4">Payment Option</h4>
        <div className=" grid-cols-10 ">
     <div className=" flex gap-4   col-span-4">
     <div className="flex flex-col  bg-white  justify-center gap-2  py-6 px-5">
        <Icon icon="mdi:currency-bdt" className="ms-14 text-secondary" width="2em" height="2em" />
        <div>
          <input type="radio" id="cash" name="payment" className="mr-2" />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
         </div>
         <div className="flex flex-col justify-center gap-2 bg-white py-6 px-5">
         <Icon icon="si:money-line"  className="ms-14 text-secondary" width="2em" height="2em"/>
        <div>
          <input type="radio" id="mobile-banking" name="payment" className="mr-2" />
          <label htmlFor="mobile-banking">Mobile Banking</label>
        </div>
         </div>
         <div className="flex flex-col justify-center gap-2 bg-white py-6 px-5">
         <Icon icon="quill:creditcard"  className="ms-14 text-secondary" width="2em" height="2em"  />
        <div>
          <input type="radio"id="card" name="payment" className="mr-2" />
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
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="sm:col-span-3 p-6 shadow bg-white  rounded-lg">
         <div className=" ">
         <h4 className="text-lg font-bold mb-4">Order Summary</h4>
            <div className="space-y-4 max-h-60  overflow-y-scroll  ">
            {orderItems.map((item) => (
                <div key={item.id} className="flex ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="flex-1 ml-4 text-xs">{item.title}<br />
                  <span>  {item.quantity} x <span className="text-secondary font-bold"> ${item.price}</span ></span>
                    </span> 
                </div>
              ))}
            </div>
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
                <span className="text-lg font-medium   ">$434.01</span>
              </div>
              <button className="w-full font-medium bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center">
            PLACE ORDER
            {/* <Icon icon="mdi-light:arrow-right" width="1.5em" height="2em" /> */}
            <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em"  />
          </button>
            </div>
         </div>
          </div>
        </div>
      </div>

      {/* Payment Option Section */}
     
    </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
