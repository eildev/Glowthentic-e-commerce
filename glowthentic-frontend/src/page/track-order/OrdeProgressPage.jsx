import Container from "../../components/Container";
import imageCart from "../../assets/img/order-track/order-progress/Cart.png";
import RegularButton from "../../components/typography/RegularButton";
import HeadTitle from "../../components/typography/HeadTitle";

const OrdeProgressPage = () => {
    const items = [
        {
          title: "W7 Prime Magic Face Primer",
          price: 225,
          quantity: 22,
          subtotal: 450,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
          image: "https://i.imgur.com/Z1S8X8Z.jpg", // Functional product image
        },
        {
          title: "W7 Prime Magic Face Primer",
          price: 300,
          quantity: 2,
          subtotal: 600,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          image: "https://i.imgur.com/8Km9tLL.jpg", // Functional product image
        },
        {
          title: "W7 Prime Magic Face Primer",
          price: 250,
          quantity: 1,
          subtotal: 250,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Turpis in voluptas",
          image: "https://i.imgur.com/4A5r7bR.jpg", // Functional product image
        },
      ];
      
      
      
  return (
    <div>
      <div className="bg-primary h-[250px]"></div>
      <Container>
        <div className="bg-gray-50  mt-[-150px] px-2">
          <div className=" bg-white rounded-lg shadow-md overflow-hidden">
            <div className=" text-secondary flex flex-col items-center justify-center align-middle text-center py-4">
              <img src={imageCart} alt="image" height="200px" width="200px" />
              <h1 className="text-3xl font-bold">
                Your order has been Successfully received!
              </h1>
            </div>
            {/* //Progress Start */}
            <div className="p-6">
              <div className="flex items-center justify-between text-center text-sm text-gray-500">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full mb-2">
                    ✓
                  </div>
                  <p className="text-xs text-gray">STEP 1</p>
                  <p className="font-semibold text-gray-700">Ordered</p>
                  <p className="text-orange-500 text-xs bg-[#FA82321A]  px-3 py-1 rounded-3xl mt-2">
                    Completed
                  </p>
                </div>

                {/* Line */}
                <div className="h-1 w-14 lg:w-60 bg-secondary"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full mb-2">
                    ✓
                  </div>
                  <p className="text-xs text-gray">STEP 2</p>
                  <p className="font-semibold text-gray-700">Shipped</p>
                  <p className="text-orange-500 bg-[#FA82321A] text-xs px-3 py-1 rounded-3xl mt-2">
                    Completed
                  </p>
                </div>

                {/* Line */}
                <div className="h-1 w-14   lg:w-60 bg-secondary"></div>

                {/* Step 3 */}
                <div className="flex flex-col  items-center">
                  <div className="w-8 h-8  bg-dark text-white flex items-center justify-center rounded-full mb-2">
                    🔒
                  </div>
                  <p className="text-xs text-gray">STEP 3</p>
                  <p className="font-semibold text-gray-700">Delivered By</p>
                  <p className="text-purple-500 text-xs  bg-[#F4F1FF] px-3 py-1 rounded-3xl mt-2">
                    In Progress
                  </p>
                </div>
              </div>

              {/* Track Shipment Button */}
              <div className="mt-6 flex justify-center">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
                  🚀 TRACK SHIPMENT
                </button>
              </div>
            </div>
            {/* //Progress End */}
            {/* ////Dash line/// */}
            <div className="border-dashed  border-t-2 mt-4  text-[#B2B2B2]  border-gray-300 mx-10"></div>

            <div className="p-6">
              {/* //Item  Start */}
              <div className="bg-gray-50 ">
                <div className=" mx-auto bg-white rounded-lg  p-6">
                  <div className="text-center">
                    <h1 className="text-lg font-semibold mb-4">
                      Hello Brian Klean, here is Your Cart
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                      Here is a summary of your recent order made on Dec 15,
                      2023. You can also view your order in the{" "}
                      <span className="font-medium text-blue-600">
                        Purchases
                      </span>{" "}
                      section of your account.
                    </p>
                  </div>

                  {/* Cart Items */}
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b py-4"
                    >
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between">
                          <HeadTitle>{item.title}</HeadTitle>
                          <p className="text-sm text-gray-500 mt-1">
                            SM-F721BLVFXID
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                          </p>
                        </div>
                        <div className="flex justify-between text-left">
                          <p className="font-medium text-gray-800">
                            Price: <br />{" "}
                            <span className="font-bold">
                              ${item.price.toFixed(2)}
                            </span>
                          </p>
                          <p className=" font-medium  text-gray-500">
                            Qty: <br />{" "}
                            <span className="font-bold">{item.quantity}</span>
                          </p>
                          <p className="font-medium text-gray-800">
                            Subtotal: <br />{" "}
                            <span className="font-bold">
                              ${item.subtotal.toFixed(2)}
                            </span>
                          </p>
                          <RegularButton>Read More</RegularButton>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Order Summary */}
                  <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                   <div className="flex justify-between">
                   <HeadTitle>Order Summary</HeadTitle>  
                   <HeadTitle>Paid with <span className="font-normal">Credit Card</span></HeadTitle>  
                   </div>

                   <p className="py-2">Your order is now confirmed!</p>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p>Subtotal:</p>
                      <p>$1,300.00 USD</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p>Shipping & Handling:</p>
                      <p>$5.95 USD</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                      <p>Est Sales Tax:</p>
                      <p>$0.69 USD</p>
                    </div>
                    <div className="flex justify-end text-lg mt-4">
                      <p className="px-4">Total(3Item):</p> 
                      <p className="font-bold text-gray-900 ">$1,306.64 USD</p>
                    </div>
                  
                  </div>

                  {/* Order Confirmation */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Your order <span className="font-medium">#239483929</span>{" "}
                      has been placed!
                    </p>
                    <p className="text-sm text-gray-600">
                      We sent an email to{" "}
                      <span className="font-medium text-blue-600">
                        loitf.uddin@gmail.com
                      </span>{" "}
                      with your order confirmation and receipt.
                    </p>
                  </div>
                </div>
              </div>
              {/* Order  End*/}
              {/* <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div>
                  <p className="font-semibold">Order ID</p>
                  <p>#123456</p>
                </div>
                <div>
                  <p className="font-semibold">Order Date</p>
                  <p>Jan 26, 2025</p>
                </div>
              </div> */}

              <div className="bg-blue-100 text-blue-700 text-center text-sm py-2 rounded-md mb-4">
                <p>Estimated Delivery: 3-5 days</p>
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
