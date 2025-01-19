import { Icon } from "@iconify/react/dist/iconify.js";
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
const OrderSummary = () => {
  return (
    <div className=" p-6 shadow text-left rounded-lg">
      <h4 className="text-lg font-medium  mb-4">Order Summary</h4>
      <div className="space-y-4 max-h-60  overflow-y-scroll  ">
        {orderItems.map((item) => (
          <div key={item.id} className="flex ">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="flex-1 ml-4 text-xs">
              {item.title}
              <br />
              <span>
                {" "}
                {item.quantity} x{" "}
                <span className="text-secondary font-bold"> ${item.price}</span>
              </span>
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
          <span className="text-lg font-medium  ">$434.01</span>
        </div>
        <button className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center">
          PLACE ORDER
          {/* <Icon icon="mdi-light:arrow-right" width="1.5em" height="2em" /> */}
          <Icon icon="mdi:arrow-right" width="1.5em" height="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
