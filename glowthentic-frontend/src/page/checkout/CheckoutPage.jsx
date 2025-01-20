import Container from "../../components/Container";
import CheckoutWizard from "../../components/wizard/CheckoutWizard";
import InputInfo from "../../components/checkout/InputInfo";
import PaymentOption from "../../components/checkout/PaymentOption";
import OrderSummary from "../../components/checkout/OrderSummary";
const CheckoutPage = () => {

  return (
    <div>
      <Container> 
      <div className="md:hidden ">
      <CheckoutWizard></CheckoutWizard>
      </div>

      <div className="container hidden md:block mx-auto px-4 py-8">
         
      {/* Billing Information Section */}
      <div>
        <h4 className="text-lg font-normal mb-4">Billing Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
          {/* Left Column: Billing Form */}
          <div className=" col-span-5 md:col-span-7  p-6 shadow rounded-lg">
            <form className="space-y-4">
              {/* //info / */}
      
              <InputInfo></InputInfo>

              <PaymentOption></PaymentOption>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-span-5  md:col-span-3    ">
            <div className=" bg-white shadow rounded-lg">

            <OrderSummary></OrderSummary>

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
