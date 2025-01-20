import image from "../../assets/img/order-confirmation/Online-shopping.png";

const OrderConfirmation = () => {
  return (
    <div className="py-10 flex items-center  justify-center bg-gray-100 ">
      <div className=" rounded-lg  text-center">
        <div className="mb-6 px-1 ">
          <div className="bg-[#fae8da] rounded-lg  py-20 md:py-10 px-10 md:mx-40">
          <img
            src={image}
            alt="Order Success"
            className="mx-auto md:w-100 w-100 h-[10rem] md:h-48"
          />
          </div>
        </div>
        <div className="text-green-500 text-5xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Your order has been placed successfully
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for choosing us! Feel free to continue shopping and explore
          our wide range of products. Happy Shopping!
        </p>
        <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
