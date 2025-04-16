import { Link, useSearchParams } from "react-router-dom";
import image from "../../assets/img/order-confirmation/Online-shopping.png";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const invoiceNumber = searchParams.get("invoice") || "Unknown";
  return (
    <Container>
      <DynamicHelmet title="Order Confirmation" />
      <div className="py-10 flex items-center  justify-center bg-gray-100 ">
        <div className=" rounded-lg  text-center">
          <div className="mb-6 px-2 ">
            <div className="bg-[#fae8da] md:rounded-lg rounded-[30px]  py-[80px] md:py-10 px-10 md:mx-40">
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

          <h2 className="text-2xl font-bold mb-2">
            Your order has been placed successfully
          </h2>
          <h1 className="text-xl mb-4">
            Your Order Number is <span className="font-bold">{invoiceNumber}</span>
          </h1>
          <p className="text-gray-600 px-2 mb-6">
            Thank you for choosing us! Feel free to continue shopping and
            explore our wide range of products. Happy Shopping!
          </p>
          <Link
            to="/products"
            className="px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderConfirmation;
