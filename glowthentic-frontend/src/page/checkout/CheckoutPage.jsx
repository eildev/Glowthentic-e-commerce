import Container from "../../components/Container";
import CheckoutWizard from "../../components/wizard/CheckoutWizard";
import InputInfo from "../../components/checkout/InputInfo";
import PaymentOption from "../../components/checkout/PaymentOption";
import OrderSummary from "../../components/checkout/OrderSummary";
import { Icon } from "@iconify/react/dist/iconify.js";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
const CheckoutPage = () => {
  return (
    <div>
      <DynamicHelmet title="Checkout Page" />
      <Container>
        {/* <---small Device ----> */}
        <div className="md:hidden ">
          <CheckoutWizard></CheckoutWizard>
        </div>
        {/* <---small Device End ----> */}
        <div className="container hidden md:block mx-auto px-4 py-8">
          {/* Billing Information Section */}
          <form className="">
            <div>
              <h4 className="text-lg font-normal mb-4">Billing Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                {/* Left Column: Billing Form */}
                <div className="space-y-4  col-span-5 md:col-span-7  p-6 shadow rounded-lg">
                  {/* //info / */}
                  <InputInfo></InputInfo>
                  <PaymentOption></PaymentOption>
                </div>

                {/* Right Column: Order Summary */}
                <div className="col-span-5  md:col-span-3    ">
                  <div className=" bg-white shadow rounded-lg">
                    <OrderSummary></OrderSummary>
                    <div className="px-6 py-3">
                      <button className="w-full font-medium text-sm bg-orange-500 text-white py-3 rounded hover:bg-orange-600 flex justify-center items-center">
                        PLACE ORDER
                        {/* <Icon icon="mdi-light:arrow-right" width="1.5em" height="2em" /> */}
                        <Icon
                          icon="mdi:arrow-right"
                          width="1.5em"
                          height="1.5em"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Payment Option Section */}
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
