import Container from "../../components/Container";
import imageCart from "../../assets/img/order-track/order-progress/Cart.png";

const OrdeProgressPage = () => {
  return (
    <div>
      <div className="bg-primary h-[250px]"></div>
      <Container>
        <div className="bg-gray-50  mt-[-150px] px-2">
          <div className=" bg-white rounded-lg shadow-md overflow-hidden">
            <div className=" text-secondary text-center py-4">
                <img src={imageCart}
                 alt="image" />
              <h1 className="text-2xl font-bold">
                Your order has been successfully received!
              </h1>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div>
                  <p className="font-semibold">Order ID</p>
                  <p>#123456</p>
                </div>
                <div>
                  <p className="font-semibold">Order Date</p>
                  <p>Jan 26, 2025</p>
                </div>
              </div>

              <div className="bg-blue-100 text-blue-700 text-center text-sm py-2 rounded-md mb-4">
                <p>Estimated Delivery: 3-5 days</p>
              </div>

              {/* Order Items */}
              <div className="space-y-4">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-medium">WT Prime Mughal Printer</p>
                        <p className="text-sm text-gray-500">Qty: 1</p>
                      </div>
                    </div>
                    <p className="font-semibold">$29.99</p>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-6 border-t pt-4">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>$89.97</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax</p>
                    <p>$2.50</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>$5.00</p>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <p>Total</p>
                  <p>$97.47 USD</p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-sm text-gray-500 mt-6">
                <p>
                  Your order #KDMR001 has been placed. Check your email for the
                  receipt and shipping updates.
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="bg-gray-100 py-4 flex justify-around text-sm">
              <button className="text-orange-500 font-medium">
                Track Order
              </button>
              <button className="text-orange-500 font-medium">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrdeProgressPage;
